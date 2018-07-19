import LSSaga from '../sagas/ListSoundSaga/ListSoundSaga';
// import MSaga from '../sagas/MainSaga/';

const rootSaga = function* rootSaga(){
    yield[
        LSSaga(),

    ];
};
export default rootSaga;