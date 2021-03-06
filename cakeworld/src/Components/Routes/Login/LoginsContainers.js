import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  state = {
    error: null,
    loading: true,
  };

  render() {
    return <LoginPresenter {...this.state} />;
  }
}
