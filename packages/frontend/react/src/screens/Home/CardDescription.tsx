import {
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { answers } from '../../config/data';
import { CardStyled } from './Home';

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  fontWeight: 700,
  margin: theme.spacing(1, 0),
}));

export function CardDescription() {
  return (
    <CardStyled>
      <TypographyStyled variant="h4">
        Questionário para medir o Nível de Ansiedade, Depressão e Estresse
        (QNADE)
      </TypographyStyled>
      <Typography variant="body2" marginY={1}>
        O <strong>Questionário</strong> é composto de 24 perguntas e possui 2
        objetivos:
      </Typography>
      <List>
        {[
          'Identificado os sintomas de ansiedade, depressão e estresse.',
          'Identificar o Nível que você se encontra.',
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemText>
              <Typography variant="body2">
                {index + 1}.{text}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" fontWeight={700} marginBottom={1}>
        Como funciona ?
      </Typography>
      <Typography variant="body2">
        O <strong>QNADE</strong> utiliza um sistema de pontuação com base em um
        código placas e cores organizado por Intensidade:
      </Typography>

      <Typography fontStyle="italic" marginY={1}>
        Emergência, Prioridade, Atenção e Não Urgente.
      </Typography>

      <TypographyStyled>Como preencher o formulário?</TypographyStyled>

      <Typography variant="body2" marginY={1}>
        Você deverá responder cada questões sobre os sintomas que apresentou{' '}
        <strong>nos últimos 7 dias.</strong>
      </Typography>

      <Typography variant="body2">
        Cada resposta tem uma pontuação na frente ex:{' '}
      </Typography>

      <TypographyStyled>Pergunta:</TypographyStyled>

      <Typography variant="body2">Você sentiu .... ?</Typography>

      <TypographyStyled>Resposta:</TypographyStyled>

      {answers.map((answer, index) => (
        <Grid key={answer}>
          <Typography sx={{ display: 'inline-block' }} fontWeight={700}>
            {index} -
          </Typography>{' '}
          {answer}
        </Grid>
      ))}

      <TypographyStyled>#ATENÇÃO#</TypographyStyled>
      <TypographyStyled>
        A resposta que você marcou, na frente dela tem um número, pode ser (0,1,
        2, 3 ou 4), o que precisa fazer é ir somando os pontos de cada resposta
        manualmente e no final terá o total de pontos para verificar o seu
        nível.
      </TypographyStyled>

      <Typography variant="body2" marginY={1}>
        Assim que responder todas as perguntas você terá um resultado com o
        total de pontos, este total você terá conferir na imagem abaixo o seu
        nível de ansiedade.
      </Typography>

      <Typography variant="body2" marginY={1}>
        Depois de preenchido todo o questionário você receberá um e-mail
        automático para poder conferir sua resposta caso precise.
      </Typography>

      <Typography variant="body2" marginY={1}>
        Este teste foi retirado do site Núcleo de Atenção ao Desenvolvimento
        Humano
      </Typography>
    </CardStyled>
  );
}
