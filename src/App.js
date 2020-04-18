import React from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"


export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </Switch>
      </BrowserRouter>
    )
  }
}
