import * as types from '../../actions/Types/types';
const INITSTATE={
    isLoading:false,
    dataSound:null,
    error:'',
    itemSelected:null,
    isRemoveAll:false,
    isPlay:false,
    vol:50,
}
export default (state=INITSTATE,action)=>{
    switch(action.type){
        case types.M_LOADING_SOUND:{
            return{
                isLoading:true
            }
        }
        case types.M_LOADED_SOUND:{
            return{
                dataSound:action.payload,
                isLoading:false
            }
        }
        case types.M_LOAD_ERROR_SOUND:{
            return{
                dataSound:null,
                error:action.payload,
                isLoading:false
            }
        }
        case types.M_SELECT_REMOVE_ITEM:{
            return {
                itemSelected:action.payload,
            }
        }
        case types.M_SELECT_REMOVE_ALL:{
            return{
                isRemoveAll:true,
            }
        }
        case types.M_TAPPED_PLAY:{
            return{
                itemSelected:action.payload,
                isLoading:true,
            }
        }
        case types.M_UN_TAPPED_PLAY:{
            return{
                itemSelected:action.payload,
                isLoading:false,
            }
        }
        case types.M_CHANGE_VOL:{
            return{
                vol:action.vol,
            }
        }
        default:{
            return state;
        }
    }
}