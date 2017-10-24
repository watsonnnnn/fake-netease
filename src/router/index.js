/**
 * Created by Administrator on 2017/8/11.
 */
import DiscoveryMusic from '../components/discovery/discoveryMusic'
import Tabbar from '../components/tabbar'
import React from 'react'
import Test from '../test/test'
import Mymusic from '../components/mime/index'
import Friends from '../components/friends'
import Account from '../components/account'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class Out extends React.Component {
    state = {
        q: '111'
    }
    render() {
        return (
            <div>
                <Test q={this.state.q}/>
                <a onClick={()=>{this.setState({q: '222'})}}>set</a>
            </div>)
    }
}

const Basic = () => (
    <Router>
        <div>
            <Route exact path="/" component={DiscoveryMusic}/>
            <Route exact path="/hoc" component={Out}/>
            <Route exact path="/mymusic" component={Mymusic}/>
            <Route exact path="/friends" component={Friends}/>
            <Route exact path="/account" component={Account}/>
            <Tabbar/>
        </div>
    </Router>
)

export default Basic;