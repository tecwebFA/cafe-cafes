import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import {iosContactOutline} from 'react-icons-kit/ionicons/iosContactOutline'
import {Icon} from 'react-icons-kit'
const NavBar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img src={"./images/cafeCafes.png"} />
        </Link>
      </div>      
        <span>
          <Link to="/list" className="navLink">
            Nossos Produtos
          </Link>
        </span>
        <span>
          <Link to="/promo/" className="navLink">
            Promoções
          </Link>
        </span>    

      {user && (
        <div className="rightSide">
          <span>
            <p className="userName"><Icon icon={iosContactOutline}></Icon> {user.email}</p>
          </span>
          <span>
            <button className="logout" onClick={handleLogout}>
              Sair
            </button>
          </span>
        </div>
      )}
      {!user && (
        <div className="rightSideIn">
          <span>
            <Link to="signup" className="navLink">
              Registrar
            </Link>
          </span>
          <span>
            <Link to="login" className="navLink">
              Login
            </Link>
          </span>
        </div>
      )}
      <span>
        <CartWidget></CartWidget>
      </span>
    </div>
  );
};
export default NavBar;
