import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom"

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2 > Welcome in Contact Page 3< /h2>
          <Link to="/">Home</Link>
          <br />
          <br />
          <Link to="/about">About</Link>
      </div>
    )
  }
}
