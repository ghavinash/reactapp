import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Login = (props) => {

Login.propTypes = {
  authenticates : PropTypes.func.isRequired,
};

return(
 <div className="container">
  <div className="row">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" to="#" onClick={() => props.authenticates('Github')}>Login with Github.</Link>
      </li>
    </ul>
  </div>
</div>
);
}

export default Login;