import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";

export function CardDescription() {
  return (
    <Card sx={{ padding: "2rem", margin: "2rem" }}>
      <Typography variant="h4" fontWeight={700}>
        Questionário para medir o Nível de Ansiedade, Depressão e Estresse
        (QNADE)
      </Typography>
      <Typography variant="body2" marginY={1}>
        O{" "}
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          Questionário
        </Typography>{" "}
        é composto de 24 perguntas e possui 2 objetivos:
      </Typography>
      <List>
        {[
          "Identificado os sintomas de ansiedade, depressão e estresse.",
          "Identificar o Nível que você se encontra.",
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
        O{" "}
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          QNADE
        </Typography>{" "}
        utiliza um sistema de pontuação com base em um código placas e cores
        organizado por Intensidade:
      </Typography>
      <i>Emergência, Prioridade, Atenção e Não Urgente.</i>
      <Typography sx={{ display: "inline-block" }} fontWeight={700}>
        Como preencher o formulário?
      </Typography>
      <Typography variant="body2">
        Você deverá responder cada questões sobre os sintomas que apresentou{" "}
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          nos últimos 7 dias.
        </Typography>
      </Typography>
      <Typography variant="body2">
        Cada resposta tem uma pontuação na frente ex:{" "}
      </Typography>
      <Typography sx={{ display: "inline-block" }} fontWeight={700}>
        Pergunta:
      </Typography>
      <Typography variant="body2">Você sentiu .... ?</Typography>
      <Typography sx={{ display: "inline-block" }} fontWeight={700}>
        Resposta:
      </Typography>
      <span>
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          0
        </Typography>{" "}
        - Não apresentei estes sintomas.
      </span>
      <span>
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          1
        </Typography>{" "}
        - Apresentei esses sintomas de forma leve e/ou por pouco tempo.{" "}
      </span>
      <span>
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          2
        </Typography>{" "}
        - Apresentei esses sintomas de forma moderada e/ou na metade do tempo.{" "}
      </span>
      <span>
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          3
        </Typography>{" "}
        - Apresentei esses sintomas com forte intensidade e/ou na maior parte do
        tempo.{" "}
      </span>
      <span>
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          4
        </Typography>{" "}
        - Apresentei esses sintomas de forma insuportável e/ou todo o tempo.
      </span>
      <Typography variant="body2">
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          #ATENÇÃO#
        </Typography>
      </Typography>
      <Typography variant="body2">
        <Typography sx={{ display: "inline-block" }} fontWeight={700}>
          A resposta que você marcou, na frente dela tem um número, pode ser
          (0,1, 2, 3 ou 4), o que precisa fazer é ir somando os pontos de cada
          resposta manualmente e no final terá o total de pontos para verificar
          o seu nível.
        </Typography>
      </Typography>

      <Typography variant="body2">
        Assim que responder todas as perguntas você terá um resultado com o
        total de pontos, este total você terá conferir na imagem abaixo o seu
        nível de ansiedade.
      </Typography>

      <Typography variant="body2">
        Depois de preenchido todo o questionário você receberá um e-mail
        automático para poder conferir sua resposta caso precise.
      </Typography>

      <Typography variant="body2">
        Este teste foi retirado do site Núcleo de Atenção ao Desenvolvimento
        Humano
      </Typography>
    </Card>
  );
}
