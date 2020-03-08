import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListCard from "./Components/ListCard/ListCard";
import New from "./Components/New/InputUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListCard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
