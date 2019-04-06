import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
// import Button from 'react-bootstrap/lib/Button';
const Top = props =>
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
  {/* <RaisedButton label="Default" /> */}
    {/* <Button bsStyle="primary">Learn more</Button> */}
  </p>
</Jumbotron>;


export default Jumbotron;