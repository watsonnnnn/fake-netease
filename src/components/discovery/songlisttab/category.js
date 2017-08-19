/**
 * Created by Administrator on 2017/8/19.
 */
import React from 'react'
import {Flex} from 'antd-mobile'
export default () => (
    <div>
        <Flex style={{height: '1.2rem'}}>
            <Flex.Item>全部歌单</Flex.Item>
            <Flex.Item></Flex.Item>
            <Flex.Item>
                <span>华语</span>
                <span>民谣</span>
                <span>电子</span>
            </Flex.Item>
        </Flex>
    </div>
)