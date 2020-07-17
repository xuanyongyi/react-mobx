import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter,
  HashRouter
} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import MainContainer from '../containers/MainContainer'

@withRouter
@observer
class Router extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={MainContainer}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router