import React, {Component} from "react"

export default class Resend extends Component {
  render(){
    return(
      <div>
        <h2>Resend Code</h2>

          <p>Email <input type="radio"/></p>
          <p>Phone <input type="radio"/></p>

          <button onClick={()=>
            this.props.history.replace({
              pathname:"/second"
            })
          } >Next</button>

      </div>

    )
  }
}
