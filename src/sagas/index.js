import LSSaga from '../sagas/ListSoundSaga/ListSoundSaga';
import MSaga from '../sagas/MainSaga/MainSoundSaga';

const rootSaga = function* rootSaga(){
    yield[
        LSSaga(),
        MSaga(),
    ];
};
export default rootSaga;