/**
 * Created by Administrator on 2017/8/18.
 */
import React from 'react'


const hoc = (Wrap) => {
    class Index extends React.Component{
        shouldComponentUpdate(nextProps){
            console.log('fu', nextProps)
            return true
        }
        render(){
            return <div>
                <p>父组件</p>
                <Wrap {...this.props}/>
            </div>
        }
    }
    return Index
}
export default hoc