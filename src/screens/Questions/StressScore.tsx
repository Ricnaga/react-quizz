import { useEffect } from "react";
import { api } from "../../application/api/axios";
import { QuestionsType } from "./QuestionsForm";

type StressScoreProps = {
  items: QuestionsType;
  email: string;
  nome: string;
  whatsapp: string;
};

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

  if (resultado <= 15) return <h1>Não urgente</h1>;
  if (resultado <= 35) return <h1>Atenção</h1>;
  if (resultado <= 59) return <h1>Prioridade</h1>;

  return <h1>Emergência</h1>;
}
