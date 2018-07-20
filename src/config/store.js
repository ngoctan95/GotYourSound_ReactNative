import MainReducer from '../reducers/MainReducer/MainReducer';
import ListSoundReducer from '../reducers/ListSoundReducer/ListSoundReducer';
import rootReducer from '../reducers/index';

import {
    put,take,call
} from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import rootSaga from '../sagas/index';
const sagaMiddleware=createSagaMiddleware();
const middleWare =[sagaMiddleware,logger];
const store = compose(applyMiddleware(...middleWare))(createStore);
export default createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);