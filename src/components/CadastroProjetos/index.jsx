import ProjetosCadastrados from "components/ProjetosCadastrados";
import React from "react";
import projetos from "./projetos.json";

function CadastroProjetos({categoria}) {
  return (
    <>
      {projetos.map(
        (item) =>
          categoria === item.categoria && (
            <ProjetosCadastrados 
            titulo={item.titulo}
            id={item.id}
            key={item.id}
            imagem={item.imagem}
            descricao={item.descricao}
            categoria={item.categoria}
            tags={item.tags}
            linkGitHub={item.linkGitHub}
            linkDeploy={item.linkDeploy}
            />
          )
      )}
    </>
  );
}

export default CadastroProjetos;

