import { Box, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../application/api/axios";
import logoAcreditarImg from "../../assets/logoAcreditar.png";
import scoreImg from "../../assets/score.jpg";

type ResultScreenData = {
  email: string;
  nome: string;
  whatsapp: string;
  resultado: string;
};

export function ResultsScreen() {
  const data = JSON.parse(
    localStorage.getItem("userData") ?? ""
  ) as ResultScreenData;
  const [state, setState] = useState<boolean>(true);

  useEffect(() => {
    setState((state) => {
      if (state) {
        api.post("/register", data);
      }
      return false;
    });
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ backgroundColor: "white" }}
    >
      <img src={logoAcreditarImg} />
      <Typography variant="h6" fontWeight={700}>
        {data.nome} analisando suas respostas
      </Typography>
      <Typography variant="h4" fontWeight={700}>
        A soma total das sua respostas é
      </Typography>
      <Typography variant="h3" fontWeight={700}>
        {data.resultado}
      </Typography>
      Pegue o total das suas resposta e veja na imagem a baixo qual o nível da
      sua ansiedade.
      <Typography>
        – Se o total deu <strong>acima de 60</strong> você precisa
        <strong> cuidar urgentemente da sua Ansiedade.</strong>
      </Typography>
      <Typography>
        – Se o total deu <strong>de 36 a 59</strong> você precisa
        <strong> cuidar urgentemente da sua Ansiedade.</strong>
      </Typography>
      <Typography>
        – Se o total deu <strong>de 16 a 35</strong> você precisa olhar com
        <strong> atenção para sua Ansiedade.</strong>
      </Typography>
      <Typography>
        – Se o total deu <strong>menos que 15</strong> você saber que
        <strong> tem pouca de Ansiedade.</strong>
      </Typography>
      <Typography>
        – Se o total deu <strong>ZERO</strong>, parabéns você tem o domínio
        total da sua vida e ansiedade não faz parte do seu dia a dia.
      </Typography>
      <img src={scoreImg} style={{ width: "100%", maxWidth: "800px" }} />
    </Grid>
  );
}
