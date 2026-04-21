import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTheme } from "@mui/material/styles";

function Rodape() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      id="contato"
      sx={{
        mt: 1,
        px: 3,
        py: { xs: 4, md: 5 },
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: isDark ? "rgba(12, 17, 17, 0.8)" : "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography color="text.secondary">
          Desenvolvido por{" "}
          <Box component="span" sx={{ color: "text.primary", fontWeight: 700 }}>
            &copy; Jocimar
          </Box>
        </Typography>

        <Stack direction="row" spacing={1.5}>
          <Link
            href="https://github.com/JocimarRodrigues"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Jocimar Rodrigues"
            sx={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              bgcolor: isDark ? "rgba(4, 5, 5, 0.88)" : "rgba(244, 251, 251, 1)",
              border: "1px solid",
              borderColor: "divider",
              transition: "transform 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "primary.main",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/Imagens/Icones/github.png"
              alt="GitHub"
              sx={{
                width: 26,
                display: "block",
                filter: isDark ? "invert(1) brightness(1.15)" : "none",
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jocimar-rodrigues-chagas/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Jocimar Rodrigues"
            sx={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              bgcolor: isDark ? "rgba(4, 5, 5, 0.88)" : "rgba(244, 251, 251, 1)",
              border: "1px solid",
              borderColor: "divider",
              transition: "transform 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "primary.main",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/Imagens/Icones/li.png"
              alt="LinkedIn"
              sx={{ width: 26, display: "block" }}
            />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Rodape;
