import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import Router from './routes'
import { observer } from 'mobx-react'


@withRouter
@observer
class App extends Component{
    render() {
      return (
        <Router />
      )
    }
}

export default App;
