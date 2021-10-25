import React from "react";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Store from "./pages/Store";

export default function MisRutas(){
    return(
        <Switch>
            <Route exact path='/' component={Store}/>
            <Route path='/About' component={About}/>
            <Route path='/Cart' component={Cart}/>
        </Switch>
    );
}