import React from "react";
import PropTypes from "prop-types";

const Login = () => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to your store's inventory.</p>
    <button
      className="facebook"
      onClick={() => this.PaymentResponse.authenticate("Facebook")}
    >
      Log In With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
