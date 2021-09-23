import React from "react";
import ItemsPresenter from "./ItemsPresenter";
import { itemsApi } from "../../../api";

export default class extends React.Component {
  state = {
    error: null,
    loading: true,
  };

  render() {
    return <ItemsPresenter {...this.state} />;
  }
}
