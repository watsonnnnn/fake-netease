import React, {Component} from 'react';
import './App.css';
import './static/common.less'
import {Provider} from 'react-redux'
import store from './redux/store'
import Route from './router'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Route/>
                </Provider>
            </div>
        );
    }
}

export default App;
