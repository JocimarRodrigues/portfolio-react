import Rodape from "components/Rodape";
import React from "react";
import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <Container>
        <Outlet />
      </Container>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
