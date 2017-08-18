import React from 'react'
import hoc from './hoc'

class Test extends React.Component{
    shouldComponentUpdate(nextProps){
        console.log('zi', nextProps)
        return true
    }
    render(){
        console.log(this.props)
        return <div>
            子组件{this.props.q}
        </div>
    }
}
export default hoc(Test)
