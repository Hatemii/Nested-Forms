import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom"


export default class App extends React.Component {

  state = {
    firstexample:true
  }

  render(){

    const FirstExample = (
      <div>
        <h2>Home</h2>
        <h4>How do you want to recieve your code?</h4>
          <p>Email <input type="radio"/></p>
          <p>Phone <input type="radio"/></p>

        <button onClick={() =>
          this.props.history.replace({
            pathname:"/second"
          })
        }>Next</button>

      </div>
    )

    return (
      <div>
        {this.state.firstexample ? FirstExample : null}
      </div>
    )
  }
}
