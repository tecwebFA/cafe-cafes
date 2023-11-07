import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="inicio">
      <div className="conteudo-inicio">
        <h1>Café e Cafés</h1>
        <p>Bem-vindo à nossa loja virtual de Cafés Gourmet!</p>
        <p className="col-xs-12">No coração de nossa loja, você encontrará uma seleção requintada dos melhores cafés do mundo. 
        Cada grão foi escolhido a dedo, torrado com maestria e embalado com carinho para lhe proporcionar 
        uma experiência de café verdadeiramente extraordinária.
        </p>
        <Link className="buttonLink" to="/list">
          Veja Nossos Produtos
        </Link>
      </div>
    </section>
  );
};
export default Home;