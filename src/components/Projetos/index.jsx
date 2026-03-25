import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import projetos from "components/CadastroProjetos/projetos.json";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);

const subirSuave = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Projetos() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [paginaProjetos, setPaginaProjetos] = useState(0);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const projetosPorPagina = 6;
  const paginasProjetos = [];

  for (let i = 0; i < projetos.length; i += projetosPorPagina) {
    paginasProjetos.push(projetos.slice(i, i + projetosPorPagina));
  }

  const projetosVisiveis = paginasProjetos[paginaProjetos] || [];

  function avancarProjetos() {
    setPaginaProjetos((paginaAtual) =>
      paginaAtual === paginasProjetos.length - 1 ? 0 : paginaAtual + 1
    );
  }

  function voltarProjetos() {
    setPaginaProjetos((paginaAtual) =>
      paginaAtual === 0 ? paginasProjetos.length - 1 : paginaAtual - 1
    );
  }

  function abrirProjeto(projeto) {
    setProjetoSelecionado(projeto);
  }

  function fecharProjeto() {
    setProjetoSelecionado(null);
  }

  function renderProjetoCard(projeto, index) {
    return (
      <MotionCard
        key={projeto.id}
        onClick={() => abrirProjeto(projeto)}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -6, scale: 1.015 }}
        sx={{
          width: 300,
          height: 300,
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: isDark ? "rgba(15, 23, 42, 0.72)" : "rgba(255, 255, 255, 0.92)",
        }}
        className="cursor-pointer"
      >
        <Box
          component="img"
          src={projeto.imagem}
          alt={projeto.titulo}
          sx={{
            width: "100%",
            height: "90%",
            objectFit: "fill",
            p: 2,
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        />
        <MotionBox
          sx={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? "linear-gradient(180deg, rgba(2, 6, 23, 0.05) 0%, rgba(2, 6, 23, 0.82) 100%)"
              : "linear-gradient(180deg, rgba(248, 250, 252, 0.02) 0%, rgba(15, 23, 42, 0.32) 100%)",
            display: "flex",
            alignItems: "flex-end",
            p: 1.8,
          }}
          whileHover={{
            background: isDark
              ? "linear-gradient(180deg, rgba(2, 6, 23, 0.02) 0%, rgba(2, 6, 23, 0.92) 100%)"
              : "linear-gradient(180deg, rgba(248, 250, 252, 0.02) 0%, rgba(15, 23, 42, 0.42) 100%)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1.25,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {projeto.titulo}
          </Typography>
        </MotionBox>
      </MotionCard>
    );
  }

  return (
    <>
      <MotionCard
        variants={subirSuave}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        id="projetos"
        className="rounded-[32px]"
        sx={{
          border: "1px solid",
          borderColor: "divider",
          bgcolor: isDark ? "rgba(15, 23, 42, 0.65)" : "rgba(255, 255, 255, 0.88)",
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Projetos
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Uma selecao dos projetos que fazem parte da minha trajetoria.
                Aqui a ideia e deixar a navegacao mais fluida, com uma vitrine
                mais limpa e mais proxima do padrao de portfolio em landing page.
              </Typography>
            </Box>
            <MotionStack
              direction="row"
              spacing={1.5}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <Button onClick={voltarProjetos} variant="outlined">
                Anterior
              </Button>
              <Button onClick={avancarProjetos} variant="contained">
                Proximo
              </Button>
            </MotionStack>
          </Stack>

          <AnimatePresence mode="wait">
            <MotionBox
              key={paginaProjetos}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 300px)",
                  md: "repeat(2, 300px)",
                  xl: "repeat(3, 300px)",
                },
                justifyContent: "center",
                gap: 2,
                minHeight: { xs: 616, md: 616 },
              }}
            >
              {projetosVisiveis.map(renderProjetoCard)}
            </MotionBox>
          </AnimatePresence>

          <MotionStack
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{ mt: 3 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {paginasProjetos.map((_, indice) => (
              <MotionBox
                key={indice}
                onClick={() => setPaginaProjetos(indice)}
                className="cursor-pointer rounded-full"
                whileHover={{ scale: 1.12 }}
                sx={{
                  width: indice === paginaProjetos ? 30 : 10,
                  height: 10,
                  bgcolor:
                    indice === paginaProjetos
                      ? "primary.main"
                      : "rgba(148, 163, 184, 0.35)",
                }}
              />
            ))}
          </MotionStack>
        </CardContent>
      </MotionCard>

      <Dialog
        open={Boolean(projetoSelecionado)}
        onClose={fecharProjeto}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 2,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            backgroundImage: "none",
          },
        }}
      >
        {projetoSelecionado && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Stack spacing={1.2}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {projetoSelecionado.titulo}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip label={projetoSelecionado.categoria} size="small" />
                  <Chip
                    label={projetoSelecionado.tags}
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </DialogTitle>
            <DialogContent dividers sx={{ borderColor: "divider" }}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: 320,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    borderRadius: "24px",
                    p: 2,
                    border: "1px solid",
                    borderColor: alpha(theme.palette.primary.main, isDark ? 0.12 : 0.16),
                  }}
                >
                  <Box
                    component="img"
                    src={projetoSelecionado.imagem}
                    alt={projetoSelecionado.titulo}
                    sx={{
                      width: "100%",
                      maxHeight: 380,
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  {projetoSelecionado.descricao}
                </Typography>
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2.5, justifyContent: "space-between" }}>
              <Button onClick={fecharProjeto} variant="text">
                Fechar
              </Button>
              <Stack direction="row" spacing={1.5}>
                <Button
                  component="a"
                  href={projetoSelecionado.linkGitHub}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href={projetoSelecionado.linkDeploy}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                >
                  Abrir projeto
                </Button>
              </Stack>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

export default Projetos;
