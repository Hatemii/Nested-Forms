import React, {Component} from "react"
import {BrowserRouter ,Link} from "react-router-dom"

export default class Second extends Component {
  render(){
    return(
      <div>
<<<<<<< HEAD

        <h2>MASTER BRANCH</h2>

        <p>This is master branch that i am working on</p>
=======
        <h2>DEVELOP BRANCH</h2>
        <p>this is develop branch that i am working now</p>
        <p>this is develop branch that i am working now</p>
        <p>this is develop branch that i am working now</p>
        <p>this is develop branch that i am working now</p>
>>>>>>> develop

        <h2>Second Page</h2>
        <h4>Enter your code</h4>



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
