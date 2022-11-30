import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HOME, RESULT } from "../../application/routes/paths";
import { questions, answers } from "../../config/questions";

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
    const resultado = items.reduce(
      (accumulator, item) =>
        item.answerValue ? accumulator + item.answerValue : accumulator,
      0
    );

    localStorage.setItem(
      "userData",
      JSON.stringify({ email, nome, whatsapp, resultado })
    );
    navigate(RESULT);
    // setScoreAsOpen(true);
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
    <Card
      sx={{ diplay: "grid", alignItems: "center", backgroundColor: "#ffc3c3" }}
    >
      <Typography variant="h6" fontWeight={700} marginBottom={1} align="center">
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
                    sx={{ padding: "1rem" }}
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
    </Card>
  );
}
