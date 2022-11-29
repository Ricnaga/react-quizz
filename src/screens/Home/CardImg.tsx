import { Card } from "@mui/material";
import scoreImg from "../../assets/score.jpg";

export function CardImg() {
  return (
    <>
      <Card>
        <img src={scoreImg} />
      </Card>
      <Card>
        <strong>AVISO:</strong> Este instrumento é de uso clínico para adultos,
        portanto não deverá ser utilizado{" "}
        <strong>
          por menor de idade, para diagnóstico ou pesquisa clínica.
        </strong>
      </Card>
    </>
  );
}
