/**
 * Created by Administrator on 2017/8/11.
 */
import React from 'react'
import {Carousel} from 'antd-mobile';

class NetCarousel extends React.Component {
    state = {
        data: ['', '', ''],
        initialHeight: '3.5rem',
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        const hProp = this.state.initialHeight ? {height: this.state.initialHeight} : {};
        return (
            <div>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    <a href="http://www.baidu.com" style={hProp}>
                        <img
                            style={hProp}
                            src={require('../../../static/images/b1.jpg')}
                            alt="icon"
                        />
                    </a>
                    <a href="http://www.baidu.com" style={hProp}>
                        <img
                            style={hProp}
                            src={require('../../../static/images/b2.png')}
                            alt="icon"
                        />
                    </a>
                    <a href="http://www.baidu.com" style={hProp}>
                        <img
                            style={hProp}
                            src={require('../../../static/images/b3.png')}
                            alt="icon"
                        />
                    </a>
                    <a href="http://www.baidu.com" style={hProp}>
                        <img
                            style={hProp}
                            src={require('../../../static/images/b4.jpg')}
                            alt="icon"
                        />
                    </a>
                </Carousel>
            </div>)
    }
}
export default NetCarousel
