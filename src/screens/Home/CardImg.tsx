import { Card } from "@mui/material";
import scoreImg from "../../assets/score.jpg";

export function CardImg() {
  return (
    <>
      <Card sx={{ padding: "2rem", margin: "2rem" }}>
        <img src={scoreImg} />
      </Card>
      <Card sx={{ padding: "2rem", margin: "2rem" }}>
        <strong>AVISO:</strong> Este instrumento é de uso clínico para adultos,
        portanto não deverá ser utilizado{" "}
        <strong>
          por menor de idade, para diagnóstico ou pesquisa clínica.
        </strong>
      </Card>
    </>
  );
}
