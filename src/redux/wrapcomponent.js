/**
 * Created by Administrator on 2017/8/11.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import React, {Component} from 'react'
import {is, fromJS} from 'immutable'

const hoc = (newSetting) => {
    let setting = {
        id: '',//应用唯一标识
        url: '',
    }
    for(let key in newSetting){
        setting[key] = newSetting[key]
    }
    return (Wrap) => {

        @connect(state => ({state: state[setting.id]}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))
        class WrappedComponent extends Component {
            shouldComponentUpdate(nextProps, nextState){
                return  !is(fromJS(this.state), fromJS(nextState))
                || !is(fromJS(this.props), fromJS(nextProps))
            }
            render() {
                // 处理ref 在外层组件中传递一个方法 function getInstance(ref){this.component = ref} 这样最终被包装组件的ref会直接赋值到外层组件中
                let props = {...this.props}
                console.log(props)
                if(typeof props.getInstance == 'function'){
                    props.ref = props.getInstance
                }
                return (
                    <Wrap {...this.state} {...props}/>
                )
            }
        }
        return WrappedComponent
    }
}

export default hoc;