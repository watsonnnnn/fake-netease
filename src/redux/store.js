/**
 * Created by Administrator on 2017/8/11.
 */
import thunkMiddleware from 'redux-thunk';
import { createStore ,combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';

const logger = createLogger();
const middlewares = [thunkMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(combineReducers(reducers), applyMiddleware(...middlewares))

export default store