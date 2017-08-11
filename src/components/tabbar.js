/**
 * Created by Administrator on 2017/8/11.
 */
import React from 'react'
import { TabBar, Icon } from 'antd-mobile';
import hoc from '../redux/wrapcomponent'

export default hoc(
    ({state, actions})=>{
        return (<TabBar
            unselectedTintColor="#949494"
            tintColor="#f5f5f5"
            barTintColor="#696565"
            hidden={state.hidden}
        >
            <TabBar.Item
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="发现音乐"
                key="tab1"
                onPress={()=>{actions.activeTab('tab1')}}
                selected={state.currentTab === 'tab1'}
                data-seed="logId1"
            />
            <TabBar.Item
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="我的音乐"
                key="tab2"
                selected={state.currentTab === 'tab2'}
                onPress={()=>{actions.activeTab('tab2')}}
                data-seed="logId1"
            />
            <TabBar.Item
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="朋友"
                selected={state.currentTab === 'tab3'}
                key="tab3"
                onPress={()=>{actions.activeTab('tab3')}}
                data-seed="logId1"
            />
            <TabBar.Item
                selected={state.currentTab === 'tab4'}
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="账号"
                onPress={()=>{actions.activeTab('tab4')}}
                key="tab4"
            />
        </TabBar>)
    }
)