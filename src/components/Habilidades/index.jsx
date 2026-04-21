import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "@mui/material/styles";
import icones from "./icones.json";

const MotionBox = motion(Box);
const MotionChip = motion(Chip);

function Habilidades() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <MotionBox
      component="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "32px",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: isDark ? "rgba(12, 17, 17, 0.78)" : "rgba(255, 255, 255, 0.92)",
        boxShadow: isDark
          ? "0 20px 45px rgba(20, 255, 236, 0.08)"
          : "0 18px 40px rgba(13, 143, 136, 0.08)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
        Habilidades
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
        Stack focada em interfaces responsivas, componentização e evolução
        contínua da experiência do usuário.
      </Typography>

      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
        {icones.map((item, index) => (
          <MotionChip
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            avatar={
              <img
                src={item.imagem}
                alt={item.titulo}
                className="h-6 w-6 rounded-full object-contain"
              />
            }
            label={item.titulo}
            variant="outlined"
            sx={{
              px: 1,
              py: 2.7,
              borderColor: "divider",
              bgcolor: isDark ? "rgba(4, 5, 5, 0.88)" : "rgba(244, 251, 251, 0.95)",
              color: "text.primary",
              "& .MuiChip-label": {
                fontSize: "0.95rem",
                fontWeight: 600,
              },
            }}
          />
        ))}
      </Stack>
    </MotionBox>
  );
}

export default Habilidades;
