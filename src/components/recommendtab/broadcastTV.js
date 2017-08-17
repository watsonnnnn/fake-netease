/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import React, {Component} from 'react'
import hoc from '../../redux/wrapcomponent'

//主播电台
@hoc
class BroadcastTV extends Component {
    state = {
        list : [1,2,3,4,5,6]
    }
    render() {
        let list = this.state.list.map((item, index) => (<div className="recommendListItem" key={index}><span>{item}</span></div>))
        return (<div className="recommendList" style={{width: '100%'}}>
            <p className="recommendListTitle">主播电台{' '}></p>
            <div className="recommendListpic">
                {list}
            </div>
            <div style={{height: 46, width: '100%'}}></div>
        </div>)
    }
}
export default BroadcastTV