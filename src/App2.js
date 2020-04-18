import React from 'react';
import {BrowserRouter, Route, Switch,Link} from "react-router-dom"

export default class App extends React.Component {
  state = {
    firstexample: true,
    secondexample: false,
    thirdexample:false,
    resendcode:false,
    value:"",
  }

  handleAllClicks = () => {
    if(this.state.firstexample){
      this.setState({
        firstexample: false,
        secondexample: true
      })
    } else if (this.state.secondexample) {
      this.setState({
        secondexample: false,
        thirdexample: true
      })
    } else if (this.state.resendcode) {
      this.setState({
        secondexample: true,
        resendcode: false
      })
    }
  }

  handleValue = (e) =>{
    this.setState({
      value:e.target.value
    })
  }


  render(){
    const firstExample = (
      <div>
        <h2>First Page</h2>
        <h4>How do you want to recieve your code ?</h4>
          <p>Email <input type="radio" /></p>
          <p>Phone <input type="radio" /></p>
        <button onClick={this.handleAllClicks}>Next</button>
      </div>
    )

    const secondExample = (
      <div>
        <h2>Second Page</h2>
        <input type="text" placeholder="Enter Code" />
        <p>Didn't recieve a code? <button onClick={()=> this.setState({secondexample: false, resendcode: true})}>click here</button></p>
        <button onClick={this.handleAllClicks}>Next</button>
      </div>
    )

    const thirdExample = (
      <div>
        <h2>Welcome</h2>
      </div>
    )

    const resendCode = (
      <div>
        <h2>Resend Code</h2>
          <p>Email <input type="radio" /></p>
          <p>Phone <input type="radio" /></p>

        <button onClick={this.handleAllClicks}>Next</button>
      </div>
    )


    return(
      <div>
        {this.state.firstexample ? firstExample : null}
        {this.state.secondexample ? secondExample : null}
        {this.state.thirdexample ? thirdExample : null}
        {this.state.resendcode ? resendCode : null}
      </div>
    )
  }
}
