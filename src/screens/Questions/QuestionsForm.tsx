import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HOME } from "../../application/routes/paths";
import { questions, answers } from "../../config/questions";
import { StressScore } from "./StressScore";

const PAGESIZE = 1;

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
    <Grid paddingX={50} paddingY={4}>
      <Typography variant="h4" fontWeight={700} marginBottom={1} align="center">
        Questionário {pageNumber} (QNADE)
      </Typography>
      {items
        .slice(initialQuestion, nextQuestions)
        .map(({ title, answerValue }) => (
          <Card key={title} sx={{ padding: "2rem", margin: "2rem" }}>
            <Typography variant="h5" fontWeight={700} marginBottom={1}>
              - {title}
            </Typography>
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
      <Grid container justifyContent="space-around">
        <Button
          variant="outlined"
          onClick={() =>
            pageNumber > 1 ? handlePreviousPage() : navigate(HOME)
          }
        >
          Voltar
        </Button>

        <Button onClick={handleNextPage} variant="contained">
          {isEndQuestions ? "Enviar" : "Próxima"}
        </Button>
      </Grid>
      <Dialog open={isOpenScore} onClose={() => setScoreAsOpen(false)}>
        <StressScore
          items={items}
          email={email}
          nome={nome}
          whatsapp={whatsapp}
          onClose={() => setScoreAsOpen(false)}
        />
      </Dialog>
    </Grid>
  );
}
