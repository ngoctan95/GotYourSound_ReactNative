import * as types from '../../actions/Types/types';
const INITSTATE={
    isLoading:false,
    dataSound:null,
    error:'',
    itemSelected:null,
    isPlaying:false,
}
export default (state=INITSTATE,action)=>{
    switch(action.type){
        case types.LS_LOADING_SOUND:{
            return{
                isLoading:true,
                isPlaying:false,
            }
        }
        case types.LS_LOADED_SOUND:{
            return{
                dataSound:action.payload,
                isLoading:false
            }
        }
        case types.LS_LOAD_ERROR_SOUND:{
            return{
                dataSound:null,
                error:action.payload,
                isLoading:false
            }
        }
        case types.LS_SELECTED_ITEM:{
            return {
                itemSelected:action.payload,
            }
        }
        case types.LS_DE_SELECTED_ITEM:{
            return{
                itemSelected:action.payload,
            }
        }
        default:{
            return state;
        }
    }
}