import { Link } from "react-router-dom";
import "./item.css";
import React from "react";
const Item = ({ id, name, img, price, cat }) => {
  return (   
      <div className="card">
        <img className="card-img-top fallback-image" src={img} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="info">Preço: R$ {price},00</p>
          {cat === "detail" ? (
            <Link to={`/detail/${id}`} className="buttonDetail">
              Ver detalhe
            </Link>
          ) : (
            <Link to={`/promo/${id}`} className="buttonDetail">
              Ver detalhe
            </Link>
          )}
        </div>
      </div>   
  );
};
export default Item;