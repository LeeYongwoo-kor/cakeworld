import React from "react";
import CartsPresenter from "./CartsPresenter";
import { cartsApi } from "../../../api";

export default class extends React.Component {
  state = {
    error: null,
    loading: true,
  };

  render() {
    return <CartsPresenter {...this.state} />;
  }
}
