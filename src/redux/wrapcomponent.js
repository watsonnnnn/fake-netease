/**
 * Created by Administrator on 2017/8/11.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import React, {Component} from 'react'

const hoc = (Wrap) => {
    @connect(state => ({state}), dispatch => ({actions: bindActionCreators(actions, dispatch)}))
    class WrappedComponent extends Component {
        render() {
            return (
                <Wrap {...this.state} {...this.props}/>
            )
        }
    }
    return WrappedComponent
}

export default hoc;