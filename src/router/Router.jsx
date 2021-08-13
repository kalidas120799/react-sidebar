import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "../pages/home/Home"
import Dashboard from "../pages/dashboard/Dashboard"
import Login from "../pages/login/Login"
import Logout from "../pages/logout/Logout"
import PNF from "../pages/404"
import { checkLogin } from "../auth"
export default class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => (
                        !checkLogin() ? < Login /> : <Redirect to="/home" />
                    )}  />
                    <Route exact path="/home" render={() => (
                        checkLogin() ? < Home /> : <Redirect to="/" />
                    )} />                  
                    <Route exact path="/dashboard" render={() => (
                        checkLogin() ? < Dashboard /> : <Redirect to="/" />
                    )} />
                    <Route exact path="/logout" render={() => (
                        checkLogin() ? < Logout /> : <Redirect to="/" />
                    )} />
                     <Route exact path="/*" component={PNF}/>
                </Switch>
            </React.Fragment>
        )
    }
}
