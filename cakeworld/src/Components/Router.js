import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Login from "./Routes/Login";
import Items from "./Routes/Items";
import Carts from "./Routes/Carts";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/carts" exact component={Carts} />
          <Route path="/items" exact component={Items} />
          <Route path="/login" exact component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
