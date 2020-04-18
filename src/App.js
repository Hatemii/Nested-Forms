import React from 'react';
import { BrowserRouter, Route , Switch, Link } from "react-router-dom"
import Home from "./component/Home"

export default class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>

            <Route path="/" component={Home} />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
