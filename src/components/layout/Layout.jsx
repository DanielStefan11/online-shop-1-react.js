import React from "react";
// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";
import LoggingMessage from "../header/LoggingMessage";
// CSS
import "./Layout.css";
// Redux
import { connect } from "react-redux";

function Layout(props) {
   return (
      <div className="layout">
         <Header />
         {props.user && <LoggingMessage />}
         {props.children}
         <Footer />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      user: state.user.data,
   };
};

export default connect(mapStateToProps, null)(Layout);
