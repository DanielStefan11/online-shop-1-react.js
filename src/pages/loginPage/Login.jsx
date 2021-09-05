import React from "react";
// React Router
import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/images/logo-2.png";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
// CSS
import "./Login.css";
// Redux
import { connect } from "react-redux";
import { loginUser, loginWithFacebook } from "../../redux/user/UserActions";
// React Icons
import { FaFacebook } from "react-icons/fa";
// react toast
import { toast } from "react-toastify";

class Login extends React.Component {
   componentDidUpdate(prevProps) {
      if (this.props.user !== prevProps.user) {
         this.props.history.push("/");
      }
   }

   render() {
      return (
         <div className="w-100 d-flex justify-content-center align-items-center login-page">
            <div className="container d-flex flex-column align-items-center">
               <Link to="/">
                  <img src={Logo} alt="logo" className="mb-5" />
               </Link>

               <h1 className="h2">Login</h1>
               <p>Choose provider you want to login</p>

               <button
                  className="btn btn-outline-dark d-flex align-items-center login-btns"
                  onClick={() => {
                     try {
                        this.props.signInWithGoogle();
                        toast.success("You have been successfuly loged in");
                     } catch (error) {
                        toast.error("Something went wrong");
                     }
                  }}
               >
                  <Google className="w-50 mr-3" />
                  <span className="text-nowrap">Login with Google</span>
               </button>
               <button
                  className="btn btn-outline-dark d-flex align-items-center py-2 mt-3 login-btns"
                  onClick={() => this.props.signInWithFacebook()}
               >
                  <FaFacebook className="w-50 mr-1.8" size="2.5rem" color="#0D88F0" />
                  <span className="text-nowrap">Login with Facebook</span>
               </button>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user.data,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      signInWithGoogle: () => dispatch(loginUser()),
      signInWithFacebook: () => dispatch(loginWithFacebook()),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
