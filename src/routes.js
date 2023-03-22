import PaginaContato from "pages/PaginaContato";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaProjetos from "./pages/PaginaProjetos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaInicial />}></Route>
          <Route path="projetos" element={<PaginaProjetos />}></Route>
          <Route path="contato" element={<PaginaContato />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
