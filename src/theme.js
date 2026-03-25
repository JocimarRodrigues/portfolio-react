import { createContext } from 'react';
import { createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({
  mode: 'dark',
  toggleColorMode: () => {},
});

export function getAppTheme(mode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#38bdf8' : '#0369a1',
      },
      secondary: {
        main: isDark ? '#f97316' : '#c2410c',
      },
      background: {
        default: isDark ? '#020617' : '#f3f8ff',
        paper: isDark ? '#0f172a' : '#ffffff',
      },
      text: {
        primary: isDark ? '#e2e8f0' : '#0f172a',
        secondary: isDark ? '#94a3b8' : '#1e293b',
      },
      divider: isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(2, 132, 199, 0.16)',
    },
    shape: {
      borderRadius: 18,
    },
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: isDark
              ? '1px solid rgba(56, 189, 248, 0.14)'
              : '1px solid rgba(2, 132, 199, 0.16)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderColor: isDark
              ? 'rgba(56, 189, 248, 0.16)'
              : 'rgba(2, 132, 199, 0.18)',
          },
        },
      },
    },
  });
}
