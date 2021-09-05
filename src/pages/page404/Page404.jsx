import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// Images
import Page404img from "../../assets/images/404page.png";
// React Router
import { Link } from "react-router-dom";

function Page404() {
   return (
      <Layout>
         <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <img src={Page404img} alt="404" />
            <h3>Sorry, the page does not exist!</h3>
            <Link to="/">
               <button className="btn btn-outline-dark mt-4">Back to Home page</button>
            </Link>
         </div>
      </Layout>
   );
}

export default Page404;
