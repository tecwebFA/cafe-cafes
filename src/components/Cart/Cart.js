import React ,{ useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart =() =>{
    const{cart, removeItem,ClearCart,getQuantity}=useContext(CartContext)
    if (cart.length===0){
        return(
            <div className="noProd">
            <h1>Não existem produtos para exibir. </h1>
            <Link className="navbar-brand" to="/">
          <h3> Voltar ao Início.</h3>
        </Link>
        </div>
        )
    }
    return (
        <div className="cartOrder">
        <h1>Produtos</h1>
        <ul>{ cart.map(p=><li key={p.id}>{p.name} 
        <button className="removeP" onClick={() => removeItem(p.id)}>Remover</button>
        <br></br> Quantidade: {p.quantity}<br></br>
        Preço Unitário: R$ {p.price},00 <br></br> 
        Subtotal: R$ {p.quantity * p.price}</li> )}
        </ul>
        <div className="finOr">
        <button onClick={()=>ClearCart()}>Esvaziar Carrinho</button>
        <Link to="/cashout">Finalizar Compra</Link>
        </div>   
        </div>
    )

}
export default Cart;