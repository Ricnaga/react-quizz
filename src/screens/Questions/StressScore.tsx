import { QuestionsType } from "./QuestionsForm";

type StressScoreProps = { items: QuestionsType };

export function StressScore({ items }: StressScoreProps) {
  const scoreLevel = items.reduce(
    (accumulator, item) =>
      item.answerValue ? accumulator + item.answerValue : accumulator,
    0
  );

  console.log(scoreLevel);
  if (scoreLevel <= 15) return <h1>Não urgente</h1>;
  if (scoreLevel <= 35) return <h1>Atenção</h1>;
  if (scoreLevel <= 59) return <h1>Prioridade</h1>;

  return <h1>Emergência</h1>;
}
