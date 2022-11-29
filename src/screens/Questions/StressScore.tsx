import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { api } from "../../application/api/axios";
import { QuestionsType } from "./QuestionsForm";

type StressScoreProps = {
  items: QuestionsType;
  email: string;
  nome: string;
  whatsapp: string;
};

type ScoreMessageProps = Record<"resultado", number>;

function ScoreMessage({ resultado }: ScoreMessageProps) {
  if (resultado <= 15)
    return (
      <>
        <Typography variant="h2" color="limegreen">
          {resultado}
        </Typography>
        <Typography variant="h4" color="limegreen">
          Não urgente
        </Typography>
      </>
    );
  if (resultado <= 35)
    return (
      <>
        <Typography variant="h2" color="gold">
          {resultado}
        </Typography>
        <Typography variant="h4" color="gold">
          Atenção
        </Typography>
      </>
    );
  if (resultado <= 59)
    return (
      <>
        <Typography variant="h2" color="orange">
          {resultado}
        </Typography>
        <Typography variant="h4" color="orange">
          Prioridade
        </Typography>
      </>
    );

  return (
    <>
      <Typography variant="h2" color="red">
        {resultado}
      </Typography>
      <Typography variant="h4" color="red">
        Emergência
      </Typography>
    </>
  );
}

export function StressScore({
  items,
  email,
  nome,
  whatsapp,
}: StressScoreProps) {
  const resultado = items.reduce(
    (accumulator, item) =>
      item.answerValue ? accumulator + item.answerValue : accumulator,
    0
  );
  useEffect(() => {
    api.post("/register", {
      email,
      nome,
      whatsapp,
      resultado: resultado.toString(),
    });
  }, []);

  return (
    <Grid
      sx={{ width: "600px", height: "300px" }}
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography variant="h3">Resultado</Typography>

      <ScoreMessage resultado={resultado} />
    </Grid>
  );
}
