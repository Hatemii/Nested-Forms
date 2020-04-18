import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom"

export default class About extends React.Component {


handleHistoryPush = () => {
  this.props.history.replace({
    pathname:"/contact"
  })
}


  render() {
    return (
      <div>
        <h2 > Welcome in About Page 2< /h2>
        <Link to="/">Home</Link>
        <br />
        <br />
        <button onClick={this.handleHistoryPush}>Contact</button>
      </div>
    )
  }
}
