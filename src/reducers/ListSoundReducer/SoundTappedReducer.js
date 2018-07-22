import * as types from '../../actions/Types/types';
const INITSTATE={
    itemSelected:null,
    isPlaying:false,
}
export default (state=INITSTATE,action)=>{
    console.log("action",action);
    switch (action.type){
        case types.LS_TAPPED_ITEM:{
            return {
                itemSelected:action.payload,
                isPlaying:action.isPlaying
            }

        }
        case types.LS_STOP_PLAY_TAPPED_ITEM:{
            return{
                isPlaying:false
            }
        }
        default:{
            return state;
        }
    }
}