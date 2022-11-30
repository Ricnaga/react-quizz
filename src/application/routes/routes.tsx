import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../../screens/Home/Home";
import { QuestionsFormScreen } from "../../screens/Questions/QuestionsForm";
import { ResultsScreen } from "../../screens/Results/Results";
import { HOME, QUESTIONS, RESULT } from "./paths";

export function RoutesPages() {
  return (
    <Routes>
      <Route path={`${HOME}*`} element={<HomeScreen />} />
      <Route path={`${QUESTIONS}`} element={<QuestionsFormScreen />} />
      <Route path={`${RESULT}`} element={<ResultsScreen />} />
    </Routes>
  );
}
