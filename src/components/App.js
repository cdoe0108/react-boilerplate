import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes/routes';

import Header from './Header'

class App extends Component {
    render(){
        return(
            <div className="container">
                <Header/>
                <Switch>
                {
                    routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))
                }
                </Switch>
            </div>
        )
    }
}
export default App;
