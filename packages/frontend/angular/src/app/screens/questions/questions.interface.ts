export interface QuestionsType {
  title: string;
  value: number;
  questionNumber: number;
}

export interface IsFinishQuestionsType
  extends Record<'email' | 'nome' | 'telefone', string> {
  nextPage: number;
}
