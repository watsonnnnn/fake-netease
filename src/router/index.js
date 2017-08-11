/**
 * Created by Administrator on 2017/8/11.
 */
import DiscoveryMusic from '../components/discoveryMusic'
import Tabbar from '../components/tabbar'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'


const Basic = () => (
    <Router>
        <div>
            <Route exact path="/" component={DiscoveryMusic}/>
            <Tabbar/>
        </div>
    </Router>
)

export default Basic;