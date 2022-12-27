import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import { ReactNode } from 'react';

type MuiContextProps = {
  children: ReactNode;
};

const theme: ThemeOptions = createTheme({
  palette: {
    background: {
      default: '#ffc3c3',
    },
  },
});
export function MuiContext({ children }: MuiContextProps) {
  return (
    <ThemeProvider theme={theme}>
      <EmotionProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionProvider>
    </ThemeProvider>
  );
}
