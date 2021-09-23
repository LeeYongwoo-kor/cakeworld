import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Loader";
import Login from "../../Login";

const LoginPresenter = ({ loading }) =>
loading ? (
    <Loader />
) : (
    
);

LoginPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default LoginPresenter;