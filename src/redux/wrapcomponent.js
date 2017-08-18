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
                return (
                    <Wrap {...this.state} {...this.props}/>
                )
            }
        }
        return WrappedComponent
    }
}

export default hoc;