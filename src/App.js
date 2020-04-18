import React from 'react';
import { BrowserRouter, Route , Switch, Link } from "react-router-dom"

import Home from "./component/Home"
import Second from "./component/Second"
import Resend from "./component/Resend"

export default class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/second" component={Second} />
            <Route path="/resendCode" component={Resend} />


          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
