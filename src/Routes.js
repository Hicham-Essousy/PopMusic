import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Deatels from './components/Deatels'
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/details/:id" exact component={Deatels}/>

            </Switch>
                
        )
    }
}
export default Routes;