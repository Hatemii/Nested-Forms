import React, {Component} from "react"

export default class Welcome extends Component {
  render(){
    return(
      <div>
        <h2>Welcome To First App</h2>

        <button onClick={() =>
          this.props.history.replace({
            pathname:"/"
          })
        }>Home</button>

      </div>
    )
  }
}
