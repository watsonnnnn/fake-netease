/**
 * Created by Administrator on 2017/8/11.
 */
/* @flow */

import {Tabs} from 'antd-mobile';
import React from 'react'

// 个性推荐
import NetCarousel from './recommendtab/firsttabcarousel'
import RecommendList from './recommendtab/recommendList'
import ExclusiveSend from './recommendtab/exclusiveSend'
import BroadcastTV from './recommendtab/broadcastTV'
import EspeciaColumn from './recommendtab/especiaColumn'
import LastestMusic from './recommendtab/lastestMusic'
import RecommendMV from './recommendtab/recommendMV'
import MusicType from './recommendtab/musicType'

// 歌单
import SongListHeader from './songlisttab/header'
import SongListCategory from './songlisttab/category'
import SongList from './songlisttab/songlist'

// 主播电台
import AnchorCarousel from './anchortab/tabcarousel'
import Anchortvs from './anchortab/tvs'
import Anchorpayjp from './anchortab/payjp'

// 排行榜
import Toplist from './toplist'

const TabPane = Tabs.TabPane

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}

const DiscoveryTabs = ({actions, state}) => {
    return (<div className="discoverytab">
        <Tabs defaultActiveKey="2" animated={false} onChange={callback} onTabClick={handleTabClick}>
            <TabPane tab='音乐' key="1">
                <NetCarousel/>
                <MusicType/>
                <hr/>
                <RecommendList/>
                <ExclusiveSend/>
                <LastestMusic/>
                <RecommendMV/>
                <EspeciaColumn/>
                <BroadcastTV/>
            </TabPane>
            <TabPane tab='歌单' key="2">
                <SongListHeader/>
                <SongListCategory/>
                <SongList/>
            </TabPane>
            <TabPane tab='电台' key="3">
                <AnchorCarousel />
                <Anchortvs />
                <Anchorpayjp />
            </TabPane>
            <TabPane tab='排行榜' key="4">
                <Toplist />
            </TabPane>
        </Tabs>
    </div>)
}

export default DiscoveryTabs