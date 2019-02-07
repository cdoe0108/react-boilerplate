import React, { Component } from 'react';

const asyncComponent = loadComponent => (
    class AsyncComponent extends Component {
        constructor(props){
            super(props)
            this.state  = { Component: null }
        }

        componentWillMount(){
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then(module => module.default)
                .then((Component) => {
                    this.setState({ Component });
                })
                .catch((err) => {
                    throw err;
                });
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            //console.log("Component ", Component)
            return (Component) ? <Component {...this.props} /> : <h2 className="loading-content">Loading...</h2>;
        }
    }
)
export default asyncComponent;