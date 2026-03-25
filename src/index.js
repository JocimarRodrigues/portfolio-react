import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRoutes from './routes';
import { ColorModeContext, getAppTheme } from './theme';
import './styles/tailwind.css';
import './styles/estilosGlobais.scss';

function AppThemeProvider() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('portfolio-theme');
    return savedMode === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = getAppTheme(mode);

  function toggleColorMode() {
    setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppThemeProvider />
  </React.StrictMode>
);
