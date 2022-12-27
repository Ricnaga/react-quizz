import { Card, Grid, styled, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../application/api/axios';
import logoAcreditarImg from '../../assets/logoAcreditar.png';
import scoreImg from '../../assets/score.jpg';

const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 20),
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  padding: theme.spacing(3),
  margin: theme.spacing(1),
}));

const ImgStyled = styled('img')(({ theme }) => ({
  margin: theme.spacing(0, 'auto', 2),
}));

const ImgScore = styled('img')(({ theme }) => ({
  margin: theme.spacing(4, 'auto'),
  width: '100%',
  maxWidth: '600px',
}));

type Reponse = Record<'nome' | 'resultado', string>;

export function ScoreScreen() {
  const { userId } = useParams();
  const [data, setData] = useState<Reponse>();

  const handleGetResultado = useCallback(
    async () =>
      api
        .get<Reponse>(`/quiz/${userId}`)
        .then((response) => setData(response.data)),
    [],
  );

  useEffect(() => {
    handleGetResultado();
  }, []);

  return (
    <GridStyled>
      <CardStyled>
        <ImgStyled src={logoAcreditarImg} />
        <Typography variant="h6" fontWeight={700} align="center">
          {data?.nome.toUpperCase()}, analisando suas respostas
        </Typography>
        <Typography variant="h4" fontWeight={700} align="center">
          A soma total das sua respostas é
        </Typography>
        <Typography variant="h3" fontWeight={700} align="center" marginY={2}>
          {data?.resultado}
        </Typography>
        <Typography align="center">
          Pegue o total das suas resposta e veja na imagem a baixo qual o nível
          da sua ansiedade.
        </Typography>
        <Typography align="center">
          &#175; Se o total deu <strong>acima de 60</strong> você precisa
          <strong> cuidar urgentemente da sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          &#175; Se o total deu <strong>de 36 a 59</strong> você precisa
          <strong> cuidar urgentemente da sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          &#175; Se o total deu <strong>de 16 a 35</strong> você precisa olhar
          com
          <strong> atenção para sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          &#175; Se o total deu <strong>menos que 15</strong> você saber que
          <strong> tem pouca de Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          &#175; Se o total deu <strong>ZERO</strong>, parabéns você tem o
          domínio total da sua vida e ansiedade não faz parte do seu dia a dia.
        </Typography>
        <ImgScore src={scoreImg} />
      </CardStyled>
    </GridStyled>
  );
}
