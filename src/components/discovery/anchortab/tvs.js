/* flow */

import React,{Component} from 'react'

class Tvs extends Component{
    render(){
        return <div className="anchor-tvs">
            <div>
            <i className="iconfont icon-fenlei fonts" />
            <span>电台分类</span>
            </div>
            <div style={{borderRight: '1px solid #ccc'}}></div>
            <div>
            <i className="iconfont icon-paixing fonts" />
            <span>电台排行</span>
            </div>
        </div>
    }
}

export default Tvs