import React from "react";
// React Router
import { Link } from "react-router-dom";

function HomeCategory(props) {
   const { route, name, description, image } = props;

   return (
      <div className="col-12 col-md-6 my-3">
         <Link to={`/category/${route}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="w-100">
               <img src={image} alt={name} className="w-100 rounded" />
            </div>
         </Link>
         <div className="d-flex justify-content-between preview-action-wrapper">
            <div className="w-100">
               <h2 className="h4 my-1">
                  <strong>{name}</strong>
               </h2>
               <p className="m-0">{description}</p>
            </div>
            <Link to={`/category/${route}`}>
               <button className="btn btn-primary mt-2">
                  <strong>Discover</strong>
               </button>
            </Link>
         </div>
      </div>
   );
}

export default HomeCategory;
