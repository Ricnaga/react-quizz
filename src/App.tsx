import { CssBaseline } from "@mui/material";
import { RouterContext } from "./application/routes/context";

export function App() {
  return (
    <RouterContext>
      <CssBaseline />
    </RouterContext>
  );
}
