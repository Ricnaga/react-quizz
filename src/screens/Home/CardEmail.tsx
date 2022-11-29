import { Card, Form } from "react-bootstrap";

function CardEmail() {
  return (
    <Card>
      <Form.Label htmlFor="email">E-mail</Form.Label>
      <Form.Control type="email" placeholder="Seu e-mail" />
      <Form.Text muted>Esta pergunta é obrigatória</Form.Text>
    </Card>
  );
}

function CardName() {
  return (
    <Card>
      <Card.Title>
        <Form.Label htmlFor="name">Nome:</Form.Label>
      </Card.Title>
      <Form.Control type="text" placeholder="Sua resposta" />
      <Form.Text muted>Esta pergunta é obrigatória</Form.Text>
    </Card>
  );
}

function CardPhone() {
  return (
    <Card>
      <Form.Label htmlFor="name">
        <p>
          Telefone DDD+CELULAR <strong>00 00000-0000</strong>
        </p>{" "}
      </Form.Label>
      <Form.Control type="text" placeholder="Sua resposta" />
      <Form.Text muted>Esta pergunta é obrigatória</Form.Text>
    </Card>
  );
}

function CardUnderAge() {
  return (
    <Card>
      <Card.Title>
        <Form.Label htmlFor="name">Sou maior de 18 anos.</Form.Label>
      </Card.Title>
      <Form.Check
        type="radio"
        name="underAge"
        label="Sim, sou maior de 18 anos"
      />
      <Form.Check type="radio" name="underAge" label="Não" />
    </Card>
  );
}

export const CardForm = {
  email: CardEmail,
  name: CardName,
  phone: CardPhone,
  underAge: CardUnderAge,
};
