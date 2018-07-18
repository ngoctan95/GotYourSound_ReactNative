import MainReducer from '../reducers/MainReducer/MainReducer';
import ListSoundReducer from '../reducers/ListSoundReducer/ListSoundReducer';
import {
    put,take,call
} from 'redux-saga/effects';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {compose,applyMiddleware,createStore,combineReducers} from 'redux';

const sagaMiddleware=createSagaMiddleware();
// const middleWare =[sagaMiddleware,logger];
let rootReducer =combineReducers({
    MainReducer,
    ListSoundReducer
})
const store = compose(applyMiddleware(...middleWare))(createStore);
export default createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run();