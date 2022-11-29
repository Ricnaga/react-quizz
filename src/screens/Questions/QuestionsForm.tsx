import { useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { HOME } from "../../routes/paths";
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
  const [items, setItems] = useState<QuestionsType>(questions);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = parseInt(searchParams.get("page") ?? "1", 10);

  const initialQuestion = (pageNumber - 1) * PAGESIZE;
  const nextQuestions = initialQuestion + PAGESIZE;
  const isEndQuestions = nextQuestions >= questions.length;

  const handlePreviousPage = () => {
    const previousPage = (pageNumber - 1).toString();
    setSearchParams({ page: previousPage });
  };

  const handleNextPage = () => {
    const nextPage = (pageNumber + 1).toString();
    setSearchParams({ page: nextPage });
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
      <Card.Title>Questionário {pageNumber} (QNADE)</Card.Title>
      {items
        .slice(initialQuestion, nextQuestions)
        .map(({ title, answerValue }) => (
          <Card key={title}>
            <Card.Title>- {title}</Card.Title>
            {answers.map((answer, index) => (
              <Form.Check
                checked={answerValue === index}
                key={answer}
                type="radio"
                name={title}
                label={`${index} - ${answer}`}
                onChange={() => handleChangeAnswer(title, index)}
              />
            ))}
          </Card>
        ))}

      <Button
        onClick={() => (pageNumber > 1 ? handlePreviousPage() : navigate(HOME))}
      >
        Voltar
      </Button>

      <Button
        onClick={() =>
          isEndQuestions ? setScoreAsOpen(true) : handleNextPage()
        }
      >
        {isEndQuestions ? "Enviar" : "Próxima"}
      </Button>
      <Modal show={isOpenScore} onHide={() => setScoreAsOpen(false)}>
        <StressScore items={items} />
      </Modal>
    </Container>
  );
}
