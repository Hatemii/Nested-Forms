import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom"

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h2 > Welcome in Home Page 1< /h2>
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}
