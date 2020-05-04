import React, {Component} from "react"
import {BrowserRouter ,Link} from "react-router-dom"

export default class Second extends Component {
  render(){
    return(
      <div>
        <h2>Second Page</h2>
        <h4>Enter your code</h4>

      <h2>HAHAHAHAHAHAH</h2>

          <input type="text" placeholder="enter code . . ."  />

          <p>Didn't recieve your code? <button onClick={() =>
            this.props.history.replace({
              pathname:"/resendCode"
            })
          }>click here</button></p>

          <button onClick={()=>
            this.props.history.replace({
              pathname:"/welcome"
            })
          }>Next</button>

      </div>

    )
  }
}
