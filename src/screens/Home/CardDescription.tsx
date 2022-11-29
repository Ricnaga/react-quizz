import { Card } from "react-bootstrap";

export function CardDescription() {
  return (
    <Card>
      <h1>
        Questionário para medir o Nível de Ansiedade, Depressão e Estresse
        (QNADE)
      </h1>
      <p>
        O <strong>Questionário</strong> é composto de 24 perguntas e possui 2
        objetivos:
      </p>
      <ol>
        <li>
          <p>Identificado os sintomas de ansiedade, depressão e estresse.</p>{" "}
        </li>
        <li>
          {" "}
          <p>Identificar o Nível que você se encontra.</p>{" "}
        </li>
      </ol>
      <strong>Como funciona ?</strong>
      <p>
        O <strong>QNADE</strong> utiliza um sistema de pontuação com base em um
        código placas e cores organizado por Intensidade:
      </p>
      <i>Emergência, Prioridade, Atenção e Não Urgente.</i>
      <strong>Como preencher o formulário?</strong>
      <p>
        Você deverá responder cada questões sobre os sintomas que apresentou{" "}
        <strong>nos últimos 7 dias.</strong>
      </p>
      <p>Cada resposta tem uma pontuação na frente ex: </p>
      <strong>Pergunta:</strong>
      <p>Você sentiu .... ?</p>
      <strong>Resposta:</strong>
      <span>
        <strong>0</strong> - Não apresentei estes sintomas.
      </span>
      <span>
        <strong>1</strong> - Apresentei esses sintomas de forma leve e/ou por
        pouco tempo.{" "}
      </span>
      <span>
        <strong>2</strong> - Apresentei esses sintomas de forma moderada e/ou na
        metade do tempo.{" "}
      </span>
      <span>
        <strong>3</strong> - Apresentei esses sintomas com forte intensidade
        e/ou na maior parte do tempo.{" "}
      </span>
      <span>
        <strong>4</strong> - Apresentei esses sintomas de forma insuportável
        e/ou todo o tempo.
      </span>
      <p>
        <strong>#ATENÇÃO#</strong>
      </p>
      <p>
        <strong>
          A resposta que você marcou, na frente dela tem um número, pode ser
          (0,1, 2, 3 ou 4), o que precisa fazer é ir somando os pontos de cada
          resposta manualmente e no final terá o total de pontos para verificar
          o seu nível.
        </strong>
      </p>

      <p>
        Assim que responder todas as perguntas você terá um resultado com o
        total de pontos, este total você terá conferir na imagem abaixo o seu
        nível de ansiedade.
      </p>

      <p>
        Depois de preenchido todo o questionário você receberá um e-mail
        automático para poder conferir sua resposta caso precise.
      </p>

      <p>
        Este teste foi retirado do site Núcleo de Atenção ao Desenvolvimento
        Humano
      </p>
    </Card>
  );
}
