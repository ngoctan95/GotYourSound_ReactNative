import {combineReducers} from 'redux';
import MainReducer from '../reducers/MainReducer/MainReducer';
import ListSoundReducer from '../reducers/ListSoundReducer/ListSoundReducer';
import ConfigReducer from '../reducers/ConfigReducer/ConfigReducer';

export default combineReducers({
    MainReducer,
    ListSoundReducer,
    ConfigReducer,
})