import React from "react";
// style
import "./Header.css";
// redux
import { connect } from "react-redux";
import { closeMenu } from "../../redux/mobileMenu/MobileMenuActions";

const Overlay = props => {
   return (
      <div
         className="overlay"
         style={
            props.isMenuOpen ? { left: "0px", opacity: "0.96" } : { transform: "translateX(-2000px)", opacity: "0" }
         }
         onClick={() => props.closeMenu()}
      ></div>
   );
};

const mapStateToProps = state => {
   return {
      isMenuOpen: state.mobileMenu.isOpen,
      user: state.user.data,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      closeMenu: () => dispatch(closeMenu()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
