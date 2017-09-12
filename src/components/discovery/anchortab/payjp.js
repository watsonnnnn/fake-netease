/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import React, {Component} from 'react'
import hoc from '../../../redux/wrapcomponent'

//付费精品
// @hoc
class PayJP extends Component {
    state = {
        list : [1,2,3,4,5,6]
    }
    render() {
        let list = this.state.list.map((item, index) => (<Item key={index} index={index} item={item}/>))

        return (
        <div className="recommendList anchor-pay" style={{width: '100%'}}>
            <p className="recommendListTitle">付费精品{' '}></p>
            <div className="row-list">
                {list}
            </div>
            <div style={{height: 46, width: '100%'}}></div>
        </div>
        )
    }
}

const Item = ({index, item})=>(<div className="listItem" key={index}>
    <img src="" alt="" height="100%" width="300px"/>
    <span>{item}</span>
</div>)
export default PayJP