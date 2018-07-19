'use stricts';
import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import {requestServiceLS} from '../../services/ListSoundService/ListSoundServices';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import * as types from '../../actions/Types/types';
export function* watchLoadDataAsync(action){
    console.log("action",action);
    try{
        let soundDataResponse = yield call(requestServiceLS.loadDataSoundFromJson);
        // setTimeout(function(){
            
        // },2000)
        yield put(actions.loadedSoundLS(soundDataResponse));
       
    }catch(err){
        yield put(actions.loadErrorSoundLS(err));
    }
} 
const watchLoadData = function* watchLoadData(){
    yield takeEvery(types.LS_LOADING_SOUND,watchLoadDataAsync);
}
export default watchLoadData;