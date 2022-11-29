import { Card } from "react-bootstrap";
import scoreImg from "../../assets/score.jpg";

export function CardImg() {
  return (
    <>
      <Card>
        <Card.Img src={scoreImg} />
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <strong>AVISO:</strong> Este instrumento é de uso clínico para
            adultos, portanto não deverá ser utilizado{" "}
            <strong>
              por menor de idade, para diagnóstico ou pesquisa clínica.
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
