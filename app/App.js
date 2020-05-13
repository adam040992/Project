import React, { Component } from 'react';
import ReactDom from "react-dom";
import store from './store';
import { Provider } from 'react-redux';
import App2 from './App2';

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <App2 />
        </Provider>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);