/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import {SearchBar} from 'antd-mobile';
import React from 'react'
import hoc from '../redux/wrapcomponent'

@hoc({id: 'topSearch'})
class TopSearch extends React.Component{
    render(){
        return (<div>
            <div className="topsearch">
                <SearchBar placeholder="搜索音乐、歌词、电台" autoFocus/>
            </div>
        </div>)
    }
}
export default TopSearch

