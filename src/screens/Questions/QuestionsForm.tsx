import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HOME } from "../../application/routes/paths";
import { questions, answers } from "./questions";
import { StressScore } from "./StressScore";

const PAGESIZE = 6;

export type QuestionsType = Array<{
  title: string;
  answerValue: null | number;
}>;

export function QuestionsFormScreen() {
  const navigate = useNavigate();
  const [isOpenScore, setScoreAsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<QuestionsType>(
    questions.map((question) => ({ title: question, answerValue: null }))
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = parseInt(searchParams.get("page") ?? "1", 10);
  const email = searchParams.get("email") ?? "";
  const nome = searchParams.get("nome") ?? "";
  const whatsapp = searchParams.get("whatsapp") ?? "";

  const initialQuestion = (pageNumber - 1) * PAGESIZE;
  const nextQuestions = initialQuestion + PAGESIZE;
  const isEndQuestions = nextQuestions >= questions.length;

  const handlePreviousPage = () => {
    const previousPage = (pageNumber - 1).toString();
    setSearchParams({ page: previousPage, email, nome, whatsapp });
  };

  const handleNextPage = async () => {
    if (!isEndQuestions) {
      const nextPage = (pageNumber + 1).toString();
      setSearchParams({ page: nextPage, email, nome, whatsapp });
      return;
    }

    setScoreAsOpen(true);
  };

  const handleChangeAnswer = (questionTitle: string, answerNumber: number) =>
    setItems((state) =>
      state.map((newState) =>
        newState.title === questionTitle
          ? { ...newState, answerValue: answerNumber }
          : newState
      )
    );

  return (
    <Container className="container w-50">
      <Card>Questionário {pageNumber} (QNADE)</Card>
      {items
        .slice(initialQuestion, nextQuestions)
        .map(({ title, answerValue }) => (
          <Card key={title}>
            <Card>- {title}</Card>
            <FormControl>
              <RadioGroup>
                {answers.map((answer, index) => (
                  <FormControlLabel
                    key={answer}
                    checked={answerValue === index}
                    control={<Radio />}
                    label={`${index} - ${answer}`}
                    onChange={() => handleChangeAnswer(title, index)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Card>
        ))}

      <Button
        variant="outlined"
        onClick={() => (pageNumber > 1 ? handlePreviousPage() : navigate(HOME))}
      >
        Voltar
      </Button>

      <Button onClick={handleNextPage} variant="contained">
        {isEndQuestions ? "Enviar" : "Próxima"}
      </Button>
      <Dialog open={isOpenScore} onClose={() => setScoreAsOpen(false)}>
        <StressScore
          items={items}
          email={email}
          nome={nome}
          whatsapp={whatsapp}
        />
      </Dialog>
    </Container>
  );
}
