/**
 * Created by Administrator on 2017/8/19.
 */
import React from 'react'
import {Icon} from 'antd-mobile'

const MusicType = () => (
    <div>
        <div className="discovery-choose">
            <div>
                <Icon type={require('static/svg/fm.svg')} size="lg" style={{height:'1rem',width:'1rem'}}/>
                <span >私人FM</span>
            </div>
            <div>
            <Icon type={require('static/svg/搜索_听歌识曲.svg')} size="lg" style={{height:'1rem',width:'1rem'}}/>
                <span>每日推荐</span>
            </div>
            <div>
            <Icon type={require('static/svg/热门.svg')} size="lg" style={{height:'1rem',width:'1rem'}}/>
                <span>热搜</span>
            </div>
            <div>
            <Icon type={require('static/svg/排行.svg')} size="lg" style={{height:'1rem',width:'1rem'}}/>
                <span>排行榜</span>
            </div>
        </div>
    </div>
)
export default MusicType