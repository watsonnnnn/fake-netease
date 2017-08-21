/**
 * Created by Administrator on 2017/8/19.
 */
import React from 'react'
import {Flex, Icon} from 'antd-mobile'
export default () => (
    <div className="category">
        <Flex style={{height: '1.2rem'}}>
            <Flex.Item className="category-1">
                <span>全部歌单 <Icon type={require('../../../static/svg/arrow_down.svg')} style={{verticalAlign: 'middle'}}/></span>
            </Flex.Item>
            <Flex.Item></Flex.Item>
            <Flex.Item className="category-3">
                <span>华语</span>
                <span className="span-middle">民谣</span>
                <span>电子</span>
            </Flex.Item>
        </Flex>
    </div>
)