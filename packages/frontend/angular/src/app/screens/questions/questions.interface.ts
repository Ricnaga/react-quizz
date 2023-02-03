export interface QuestionsType {
  title: string;
  value: number;
  questionNumber: number;
}

export type User = Record<'email' | 'nome' | 'telefone', string>;

export interface IsFinishQuestionsType extends User {
  nextPage: number;
}
