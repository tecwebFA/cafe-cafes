import React, { useState } from "react";
import "./Categories.css";
const Categories = ({
  handleOrigem,
  handleTamanho,
  handlePrice,
  returntoAllProducts,
}) => {
  const [origin] = useState([
    { id: "Brasil", text: "Brasil" },
    { id: "Colombia", text: "Colombia" },
    { id: "Guatemala", text: "Guatemala" },
    { id: "Italia", text: "Italia" },
  ]);

  const [tamanho] = useState([
    { id: "Capsula", text: "Capsula" },
    { id: "Grano", text: "Grão" },
    { id: "Molido", text: "Moído" },
  ]);

  const [price] = useState([
    { id: 900, text: "Até 900 R$" },
    { id: 1000, text: "Até 1000 R$" },
    { id: 2000, text: "Até 2000 R$" },
    { id: 3000, text: "Até 3000 R$" },
  ]);

  return (
    <div className="filter-box">   
      <h6>Origem</h6>
      {origin.map((prod, index) => {
        return (
          <span key={index} id={prod.id} onClick={() => handleOrigem(prod.id)}>
            {prod.text}
          </span>
        );
      })}
      <h6>Tamanho</h6>
      {tamanho.map((prod, index) => {
        return (
          <span
            key={index}
            id={prod.id}
            onClick={() => handleTamanho(prod.id)}
          >
            {prod.text}
          </span>
        );
      })}
      <h6>Preço</h6>
      {price.map((prod, index) => {
        return (
          <span key={index} id={prod.id} onClick={() => handlePrice(prod.id)}>
            {prod.text}
          </span>
        );
      })}
      <a href="javascript:void(0)" onClick={returntoAllProducts}>
        Remover filtros
      </a>
    </div>
 
  );
};
export default Categories;
