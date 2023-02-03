export type IGetQuiz = Record<'resultado', string>;
export type IGetUser = Record<'nome', string>;

export type Data = IGetQuiz & IGetUser;
