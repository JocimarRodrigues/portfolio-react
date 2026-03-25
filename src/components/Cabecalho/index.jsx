import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import CabecalhoLink from "components/CabecalhoLink";
import { ColorModeContext } from "theme";

function Cabecalho() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor:
          mode === "dark"
            ? "rgba(4, 5, 5, 0.82)"
            : "rgba(244, 251, 251, 0.88)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Toolbar
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: "1200px",
          gap: 2,
          px: { xs: 2, md: 3 },
          py: 1.5,
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Jocimar Rodrigues
          </Typography>
          <Chip
            label="Full Stack Engineer"
            size="small"
            sx={{
              mt: 0.8,
              bgcolor:
                mode === "dark"
                  ? alpha(theme.palette.primary.main, 0.12)
                  : alpha(theme.palette.primary.main, 0.1),
              color: mode === "dark" ? "primary.main" : "text.primary",
              borderRadius: "999px",
              border: "1px solid",
              borderColor:
                mode === "dark"
                  ? alpha(theme.palette.primary.main, 0.18)
                  : alpha(theme.palette.primary.main, 0.16),
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1.5 }}
          alignItems="center"
          useFlexGap
          flexWrap="wrap"
          justifyContent="flex-end"
        >
          <Stack
            component="nav"
            direction="row"
            spacing={{ xs: 0.5, sm: 1 }}
            useFlexGap
            flexWrap="wrap"
            justifyContent="flex-end"
            className="max-w-[44rem]"
          >
            <CabecalhoLink url="#topo">Inicio</CabecalhoLink>
            <CabecalhoLink url="#sobre">Sobre</CabecalhoLink>
            <CabecalhoLink url="#projetos">Projetos</CabecalhoLink>
            <CabecalhoLink url="https://cursos.alura.com.br/vitrinedev/jocimarrodrigues1337">
              Cursos e Certificados
            </CabecalhoLink>
            <CabecalhoLink url="#contato">Contato</CabecalhoLink>
          </Stack>

          <FormControlLabel
            sx={{ ml: 0.5, mr: 0 }}
            control={
              <Switch
                checked={mode === "light"}
                onChange={toggleColorMode}
                color="primary"
              />
            }
            label={mode === "dark" ? "Dark" : "Light"}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Cabecalho;
