'use stricts';
import {
    put,
    takeEvery,
    call,
    all,
    takeLatest
} from 'redux-saga/effects';
import {requestServiceLS} from '../../services/ListSoundService/ListSoundServices';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import * as types from '../../actions/Types/types';
/**
 * Load data from sound_info.json
 * @param {action} do the hell in there 
 */
export function* watchLoadDataAsync(action){
    console.log("action",action);
    try{
        let soundDataResponse = yield call(requestServiceLS.loadDataSoundFromJson);
        yield put(actions.loadedSoundLS(soundDataResponse));
       
    }catch(err){
        yield put(actions.loadErrorSoundLS(err));
    }
} 

/**
 * 
 * @param {item} item sound for playing 
 */
export function* watchPlayTappedItemAsync(item){
    try{
        yield put(actions.playTappedItem(item));
        let isDone = yield call (requestServiceLS.playTappedItemLS,item);
        console.log("res",isDone);
        yield put(actions.stopTappedItem(isDone));
    }catch(err){
        console.log("err",err);
    }
}


export function* watchStopTappedItemAsync(item){
    try{
         yield call(requestServiceLS.stopItemItemAudioLS,item);
    }catch(err){
        console.log("err",err);
    }
}

function* watchAll(){
    yield all([
         takeEvery(types.LS_LOADING_SOUND,watchLoadDataAsync),
         takeEvery(types.LS_TAPPED_ITEM,watchPlayTappedItemAsync),
         takeEvery(types.LS_STOP_PLAY_TAPPED_ITEM,watchStopTappedItemAsync),
    ])
}
export default watchAll;

