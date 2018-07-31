import {
    put,
    takeEvery,
    call,
    all,
} from 'redux-saga/effects';
import {requestServiceM} from '../../services/MainService/MainSoundService';
import * as actions from '../../actions/index';
import * as types from '../../actions/Types/types';

export function* watchPlayListItemSoundAsync(item){
    console.log("@#@#@#@#@",item);
    try{
        yield call (requestServiceM.playListItemSound,item);

    }catch(error){

    }
}
function* watchAll(){
    yield all([
        takeEvery(types.MI_TAPPED_PLAY,watchPlayListItemSoundAsync), 
    ])
}
export default watchAll;