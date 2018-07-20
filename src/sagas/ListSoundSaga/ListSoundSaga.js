'use stricts';
import {
    put,
    takeEvery,
    call,
    all
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
const watchLoadData = function* watchLoadData(){
    yield takeEvery(types.LS_LOADING_SOUND,watchLoadDataAsync);
}

/**
 * 
 * @param {item} item sound for playing 
 */
export function* watchPlayTappedItemAsync(item){
    try{
        yield call (requestServiceLS.playTappedItemLS,item);
        yield put(actions.playTappedItem(item));
    }catch(err){
        console.log("err",err);
    }
}
const watchPlayTappedItem=function* watchPlayTappedItem(){
    yield takeEvery(types.LS_TAPPED_ITEM,watchPlayTappedItemAsync);
}

function* watchAll(){
    yield all([
        // watchLoadData,
        // watchPlayTappedItem
         takeEvery(types.LS_LOADING_SOUND,watchLoadDataAsync),
         takeEvery(types.LS_TAPPED_ITEM,watchPlayTappedItemAsync)
    ])
}
export default watchAll;

