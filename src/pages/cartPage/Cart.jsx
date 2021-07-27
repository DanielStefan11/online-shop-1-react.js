import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import { BsFillTrashFill as RemoveIcon } from "react-icons/bs";
// Redux
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/CartActions";
// React Router
import { Link } from "react-router-dom";
// CSS
import "./Cart.css";

function Cart(props) {
   const totalSum = products => {
      return products.reduce((acc, product) => {
         return acc + product.quantity * product.price;
      }, 0);
   };

   return (
      <Layout>
         <div
            className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
         >
            {props.products.length ? (
               <div className="container-fluid">
                  <div className="cart-info d-flex justify-content-between text-center h4 text-bold">
                     <p className="w-25">Produs</p>
                     <p className="w-25">Pret</p>
                     <p className="w-25">Cantitate</p>
                     <p className="w-25">Total</p>
                  </div>
                  {props.products.map(product => {
                     return (
                        <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                           <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                              <img src={product.image} alt="Produs" />
                              <p>{product.name}</p>
                           </div>
                           <p className="w-25">
                              {product.price} {product.currency}
                           </p>
                           <p className="w-25">{product.quantity}</p>
                           <div className="w-25 d-flex justify-content-center align-items-center">
                              <p className="mr-2 mb-0">
                                 {product.price * product.quantity} {product.currency}
                              </p>
                              <button
                                 className="btn btn-outline-danger"
                                 onClick={() => props.removeFromCart({ id: product.id })}
                              >
                                 <RemoveIcon />
                              </button>
                           </div>
                        </div>
                     );
                  })}
                  <div className="d-flex justify-content-end border-top">
                     <div className="w-25 d-flex align-items-center justify-content-center">
                        <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                     </div>
                     <div className="w-25 d-flex flex-column">
                        <p className="my-4 text-center">
                           {totalSum(props.products)} {props.products[0].currency}
                        </p>
                        {/* <button className="btn btn-primary">Plasează comanda</button> */}
                     </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                     <button className="btn btn-primary">Plasează comanda</button>
                  </div>
               </div>
            ) : (
               <div className="d-flex flex-column align-items-center">
                  <p className="h3 text-center">There are no products in the cart</p>
                  <Link to="/">
                     <button className="btn btn-outline-dark">Back to Home page</button>
                  </Link>
               </div>
            )}
         </div>
      </Layout>
   );
}

function mapStateToProps(state) {
   return {
      products: state.cart.products,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      removeFromCart: payload => dispatch(removeFromCart(payload)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
