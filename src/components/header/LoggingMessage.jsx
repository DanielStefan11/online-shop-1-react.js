import React from "react";
// Redux
import { connect } from "react-redux";

const LoggingMessage = props => {
   return (
      <div className="w-100 bg-primary text-white py-2 d-flex justify-content-center align-items-center loged-user">
         <p className="mb-0">Hi, {props.user.displayName}!</p>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      user: state.user.data,
   };
};

export default connect(mapStateToProps, null)(LoggingMessage);
