import React from 'react';

export default class App extends React.Component {
  state = {
    firstexample: true,
    secondexample: false,
    thirdexample:false,
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
        <button onClick={()=> this.setState({secondexample: false, thirdexample: true})}>Next</button>
      </div>
    )

    const thirdExample = (
      <div>
        <h2>Welcome</h2>
      </div>
    )


    return(
      <div>
        {this.state.firstexample ? firstExample : null}
        {this.state.secondexample ? secondExample : null}
        {this.state.thirdexample ? thirdExample : null}
      </div>
    )
  }
}
