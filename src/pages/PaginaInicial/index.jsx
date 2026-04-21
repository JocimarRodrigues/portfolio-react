import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Habilidades from "components/Habilidades";
import Projetos from "components/Projetos";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import fotoPerfil from "./fotoPerfil.png";

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

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

function PaginaInicial() {
  const theme = useTheme();
  const nomeRef = useRef(null);

  useEffect(() => {
    if (nomeRef.current) {
      animacaoNoNome(nomeRef.current);
    }
  }, []);

  function animacaoNoNome(elemento) {
    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  return (
    <Box component="main" id="topo" className="relative overflow-hidden">
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack spacing={{ xs: 5, md: 8 }}>
          <MotionBox
            className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <MotionBox variants={subirSuave}>
              <MotionBox variants={subirSuave}>
                <Typography
                  variant="overline"
                  sx={{
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "0.74rem",
                    fontWeight: 400,
                    letterSpacing: "0.24em",
                    mb: 1.5,
                    display: "block",
                    opacity: 1,
                    color:
                      theme.palette.mode === "dark"
                        ? "secondary.main"
                        : "text.secondary",
                  }}
                >
                  PORTFOLIO 2026
                </Typography>
              </MotionBox>

              <MotionBox variants={subirSuave}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4.2rem" },
                    lineHeight: 1.05,
                    letterSpacing: "-0.05em",
                    maxWidth: 620,
                  }}
                >
                  Ola, me chamo{" "}
                  <Box
                    component="span"
                    ref={nomeRef}
                    sx={{ color: "primary.main", fontWeight: 800 }}
                  >
                    Jocimar Rodrigues
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                      fontWeight: 800,
                      animation: "piscaNome 0.8s infinite",
                      "@keyframes piscaNome": {
                        "0%, 100%": {
                          opacity: 1,
                        },
                        "50%": {
                          opacity: 0.2,
                        },
                      },
                    }}
                  >
                    .
                  </Box>
                </Typography>
              </MotionBox>

              <MotionStack
                variants={subirSuave}
                direction="row"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                sx={{ mt: 4 }}
              >
                <Button
                  component="a"
                  href="#projetos"
                  variant="contained"
                  size="large"
                  className="shadow-glow"
                >
                  Ver projetos
                </Button>
                <Button
                  component="a"
                  href="mailto:jocimarwkg@gmail.com"
                  variant="outlined"
                  size="large"
                >
                  Falar comigo
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/jocimar-rodrigues-chagas/"
                  target="_blank"
                  rel="noreferrer"
                  variant="text"
                  size="large"
                >
                  LinkedIn
                </Button>
              </MotionStack>
            </MotionBox>

            <MotionBox
              variants={subirSuave}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 5.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              className="relative flex items-center justify-center"
              sx={{ minHeight: { xs: 320, md: 420 } }}
            >
              <MotionBox
                className="absolute -right-8 top-10 h-44 w-44 rounded-full blur-3xl"
                sx={{
                  bgcolor: "primary.main",
                  opacity: theme.palette.mode === "dark" ? 0.14 : 0.1,
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <MotionBox
                className="absolute inset-x-8 bottom-6 h-20 rounded-full blur-3xl"
                sx={{
                  bgcolor: "secondary.main",
                  opacity: theme.palette.mode === "dark" ? 0.12 : 0.08,
                }}
                animate={{ scaleX: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <MotionBox
                component="img"
                src={fotoPerfil}
                alt="Foto de perfil de Jocimar Rodrigues"
                className="relative z-10 aspect-square w-full max-w-[320px] rounded-full object-cover object-top shadow-glow"
                sx={{
                  border: "4px solid",
                  borderColor:
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.primary.main, 0.16)
                      : alpha(theme.palette.primary.main, 0.22),
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              />
            </MotionBox>
          </MotionBox>

          <MotionCard
            variants={subirSuave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            id="sobre"
            className="rounded-[32px] border border-slate-800/80 bg-slate-950/65"
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Sobre mim
              </Typography>
              <Typography
                color={
                  theme.palette.mode === "dark" ? "text.secondary" : "text.primary"
                }
                sx={{
                  fontSize: { xs: "1rem", md: "1.12rem" },
                  lineHeight: 1.9,
                }}
              >
                Sempre fui apaixonado por tecnologia, mas a programacao entrou
                na minha vida de forma mais concreta algum tempo depois. Quando
                comecei a estudar de verdade e entender como o mercado funcionava,
                percebi que era exatamente o tipo de problema que eu gostava de
                resolver. Desde entao venho construindo minha carreira com muita
                pratica, curiosidade e vontade de evoluir. Este portfolio continua
                contando essa historia, so que agora de um jeito mais profissional
                e mais coerente com a fase que vivo hoje.
              </Typography>
            </CardContent>
          </MotionCard>

          <Habilidades />
          <Projetos />
        </Stack>
      </Container>
    </Box>
  );
}

export default PaginaInicial;
