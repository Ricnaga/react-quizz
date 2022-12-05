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
  styled,
} from "@mui/material";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HOME, SCORE } from "../../application/routes/paths";
import { questions, answers } from "../../config/data";
import { api } from "../../application/api/axios";

type QuestionsType = Array<{
  title: string;
  answerValue: null | number;
}>;

const PAGESIZE = 1;

const FORMATTED_QUESTIONS = questions.map((title) => ({
  title,
  answerValue: null,
}));

export function QuestionsFormScreen() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<QuestionsType>(FORMATTED_QUESTIONS);

  const pageNumber = parseInt(searchParams.get("page") ?? "1", 10);
  const queryString = {
    email: searchParams.get("email") as string,
    nome: searchParams.get("nome") as string,
    whatsapp: searchParams.get("whatsapp") as string,
  };

  const firstQuestion = (pageNumber - 1) * PAGESIZE;
  const lastQuestion = firstQuestion + PAGESIZE;
  const isEndQuestions = lastQuestion >= questions.length;

  const handlePreviousPage = () => {
    const previousPage = pageNumber - 1;
    return previousPage
      ? setSearchParams({
          ...queryString,
          page: previousPage.toString(),
        })
      : navigate(HOME);
  };

  const handleNextPage = async () => {
    if (!isEndQuestions) {
      const nextPage = (pageNumber + 1).toString();
      return setSearchParams({ ...queryString, page: nextPage });
    }

    const data = {
      ...queryString,
      resultado: items
        .reduce(
          (accumulator, item) =>
            item.answerValue ? accumulator + item.answerValue : accumulator,
          0
        )
        .toString(),
    };

    api
      .post<{ id: string }>("/user", data)
      .then(({ data }) => navigate(`${SCORE}/${data.id}`));
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
    <GridStyled>
      <Typography variant="h6" fontWeight={700} marginBottom={1} align="center">
        Questionário {pageNumber} (QNADE)
      </Typography>
      {items
        .slice(firstQuestion, lastQuestion)
        .map(({ title, answerValue }) => (
          <CardStyled key={title}>
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
          </CardStyled>
        ))}
      <Grid container justifyContent="space-around" marginBottom={4}>
        <Button variant="outlined" onClick={handlePreviousPage}>
          Voltar
        </Button>

        <Button onClick={handleNextPage} variant="contained">
          {isEndQuestions ? "Enviar" : "Próxima"}
        </Button>
      </Grid>
    </GridStyled>
  );
}

export const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2, 50),
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4),
}));
