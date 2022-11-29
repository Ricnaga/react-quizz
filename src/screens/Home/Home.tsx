import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOME, QUESTIONS } from "../../routes/paths";
import { CardDescription } from "./CardDescription";
import { CardForm } from "./CardEmail";
import { CardImg } from "./CardImg";

export function HomeScreen() {
  const navigate = useNavigate();
  return (
    <Container className="container w-50">
      <CardDescription />
      <CardForm.email />
      <CardImg />
      <CardForm.name />
      <CardForm.phone />
      <CardForm.underAge />
      <Button onClick={() => navigate(QUESTIONS)}>Próxima</Button>
    </Container>
  );
}
