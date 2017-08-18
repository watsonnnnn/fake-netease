/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import React, {Component} from 'react'
import hoc from '../../redux/wrapcomponent'

//精选专栏
// @hoc
class EspecialColumn extends Component {
    state = {
        list : [1,2,3,4,5,6]
    }
    render() {
        let list = this.state.list.map((item, index) => (<div className="recommendListItem" key={index}><span>{item}</span></div>))
        return (<div className="recommendList">
            <p className="recommendListTitle">精选专栏{' '}></p>
            <div className="recommendListpic">
                {list}
            </div>
        </div>)
    }
}
export default EspecialColumn