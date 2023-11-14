'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import theme from '../../common/themes';
import config from '@/common/config';

export default function MUIProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(config)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
