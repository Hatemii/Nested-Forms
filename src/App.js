import React from 'react';

export default class App extends React.Component {
  state = {
    firstexample: true,
    secondexample: false,
    thirdexample:false,
    resendcode:false,
  }

  render(){

    const firstExample = (
      <div>
        <h2>First Page</h2>
        <button onClick={()=> this.setState({firstexample: false, secondexample: true})}>Next</button>
      </div>
    )

    const secondExample = (
      <div>
        <h2>Second Page</h2>
        <input type="text" placeholder="Enter Code" />
        <p>Resend Code <button onClick={()=> this.setState({secondexample: false, resendcode: true})}>click here</button></p>
        <button onClick={()=> this.setState({secondexample: false, thirdexample: true})}>Next</button>
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

        <button onClick={()=> this.setState({secondexample: true, resendcode: false})}>Next</button>
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
