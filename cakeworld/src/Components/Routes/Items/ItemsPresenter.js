import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Loader";
import Item from "../../Item";

const ItemsPresenter = ({ loading }) =>
loading ? (
    <Loader />
) : (
    
);

ItemsPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default ItemsPresenter;