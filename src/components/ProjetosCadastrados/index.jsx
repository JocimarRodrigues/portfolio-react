import React from "react";
import Cards from "./Cards";
import projetos from './projetos.json';



function ProjetosCadastrados({ categoria }) {


  return (
    <section>
        <div>
            
                {projetos.map((item) => categoria === item.categoria && (
                    <Cards 
                    key={item.id}
                    imagem={item.imagem}
                    />
                ))}
     
        </div>
    </section>
  );
}

export default ProjetosCadastrados;
