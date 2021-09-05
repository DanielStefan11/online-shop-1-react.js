import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import { FaCartPlus as AddToCartICon } from "react-icons/fa";
import { BsFillTrashFill as RemoveIcon } from "react-icons/bs";
// React Router
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/FavoritesActions";
import { addToCart } from "../../redux/cart/CartActions";
// CSS
import "./Favorites.css";

function Favorites(props) {
   return (
      <Layout>
         <div
            className="favorites-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center"
         >
            {props.products.length ? (
               <div className="container-fluid">
                  <h1 className="text-center mb-5 mt-5 mt-sm-5 mt-lg-0">Productele tale favorite</h1>
                  {props.products.map(product => {
                     return (
                        <div key={product.id} className="favorite-product d-flex justify-content-between mb-5">
                           <div className="favorite-product-info d-flex align-items-center">
                              <img src={product.image} alt="Product favorit" className="mr-3" />
                              <div>
                                 <h3 className="mt-3 mt-sm-3 mt-lg-0">{product.name}</h3>
                                 <h4 className="mr-lg-3  text-primary font-weight-bold">
                                    {product.price} {product.currency}
                                 </h4>
                              </div>
                           </div>
                           <div className="favorite-product-btns d-flex align-items-center">
                              <button
                                 className="btn btn-outline-dark"
                                 onClick={() =>
                                    props.addToCart({
                                       product,
                                    })
                                 }
                              >
                                 <AddToCartICon />
                              </button>
                              <button
                                 className="btn btn-outline-danger ml-3"
                                 onClick={() =>
                                    props.removeFromFavorites({
                                       id: product.id,
                                    })
                                 }
                              >
                                 <RemoveIcon />
                              </button>
                           </div>
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div className="d-flex flex-column align-items-center justify-content-center">
                  <p className="h3 text-center">There are no favorite products</p>
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
      products: state.favorites.products,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      removeFromFavorites: payload => dispatch(removeFromFavorites(payload)),
      addToCart: payload => dispatch(addToCart(payload)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
