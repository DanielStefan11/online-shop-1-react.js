import React from "react";
// Components
import ProductItem from "../productItem/ProductItem";
// router
import { withRouter } from "react-router-dom";

function ProductList(props) {
  const { products, history } = props;

  return (
    <div className="row my-4">
      {products?.length <= 0 ? (
        <div className="w-100 d-flex flex-column align-items-center mt-5">
          <h3> We couldn't find any products!</h3>
          <button
            className="btn btn-dark mt-4"
            onClick={() => history.push("/")}
          >
            Back to Home
          </button>
        </div>
      ) : (
        products.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })
      )}
    </div>
  );
}

export default withRouter(ProductList);
