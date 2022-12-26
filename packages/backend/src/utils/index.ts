export const initMessage = (port: number) =>
  console.log(
    `\n\t-> Backend is \t\x1b[32mONLINE\n\t\x1b[37m-> Local:\t\x1b[35mhttp://localhost:${port}`,
  );
