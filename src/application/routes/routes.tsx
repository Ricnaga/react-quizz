import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../../screens/Home/Home";
import { QuestionsFormScreen } from "../../screens/Questions/QuestionsForm";
import { HOME, QUESTIONS } from "./paths";

export function RoutesPages() {
  return (
    <Routes>
      <Route path={`${HOME}*`} element={<HomeScreen />} />
      <Route path={`${QUESTIONS}`} element={<QuestionsFormScreen />} />
    </Routes>
  );
}
