/**
 * Created by Administrator on 2017/8/11.
 */
import React from 'react'
import {Flex} from 'antd-mobile'

const styles = {
    one: {
        'verticalAlign': 'middle',
        'height': '.4rem',
    },
    two: {
        'fontSize': '0.25rem',
        'letterSpacing': 2
    }
}

class SongListCarousel extends React.Component {
    state = {
        data: ['', '', ''],
        initialHeight: '3.5rem',
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="songlist-pic">
                <img src={require('../../../static/images/songlist-header-dark.png')}
                     style={{height: '2.5rem', width: '2.5rem', margin: '0.5rem 0.25rem'}}/>
                <div className="summary">
                    <div className="top">
                        <img style={{verticalAlign: 'middle', marginRight: 4}} src={require('../../../static/images/皇冠.png')} alt="hg"/>
                        精品歌单
                        <img style={styles.one} src={require('../../../static/images/箭头.png')}
                                                                   alt="arrow"/></div>
                    <div style={{...styles.two, marginBottom: 4, color: '#fff'}}>城会玩系列，特立独行{''}独具一格</div>
                    <div style={{...styles.two, fontSize: '0.2rem', color: 'rgba(39, 37, 37, 0.38)'}}>风格混搭，别具一格</div>
                </div>
            </div>)
    }
}
export default SongListCarousel
