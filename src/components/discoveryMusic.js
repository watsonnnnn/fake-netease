/**
 * Created by Administrator on 2017/8/11.
 */
import React, {Component} from 'react'
import TopSearch from './topsearch'
import DiscoveryTabs from './discoverytabs'
import hoc from '../redux/wrapcomponent'

@hoc
class DiscoveryMusic extends Component {
    render() {
        return (<div>
            <TopSearch/>
            <img src={require('../static/svg/tabfirst.svg')} alt="pic"/>
            <DiscoveryTabs/>
        </div>)
    }
}

export default DiscoveryMusic
