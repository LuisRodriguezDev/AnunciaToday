import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import CrearAnuncio from "./containers/CrearAnuncio";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path='/nuevo_anuncio' component={CrearAnuncio}/>
    <Route component={NotFound} />
  </Switch>
