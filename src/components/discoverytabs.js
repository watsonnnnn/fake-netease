/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import {Tabs, Flex} from 'antd-mobile';
import React from 'react'
import hoc from '../redux/wrapcomponent'
import NetCarousel from './firsttabcarousel'
import RecommendList from './recommendList'
const TabPane = Tabs.TabPane

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}

const DiscoveryTabs = ({actions, state}) => {
    return (<div className="discoverytab">
        <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
            <TabPane tab='个性推荐' key="1">
                <NetCarousel/>
                <div className="discovery-choose">
                    <div>
                        <a></a>
                        <span >私人FM</span>
                    </div>
                    <div>
                        <a  className="a2" ></a>
                        <span>每日歌曲推荐</span>
                    </div>
                    <div>
                        <a  className="a3" href="#"></a>
                        <span>云音乐热搜榜</span>
                    </div>
                </div>
                <hr/>
                <RecommendList/>
            </TabPane>
            <TabPane tab='歌单' key="2">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    Content of Second Tab
                </div>
            </TabPane>
            <TabPane tab='主播电台' key="3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    Content of Third Tab
                </div>
            </TabPane>
            <TabPane tab='排行榜' key="4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    Content of Third Tab
                </div>
            </TabPane>
        </Tabs>
    </div>)
}

export default hoc(DiscoveryTabs)