import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Loader";
import Cart from "../../Cart";

const CartsPresenter = ({ loading }) =>
loading ? (
    <Loader />
) : (
    
);

CartsPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default CartsPresenter;