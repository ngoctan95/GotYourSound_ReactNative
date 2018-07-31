import * as types from '../../actions/Types/types';
const INITSTATE={
    isLoading:false,
    dataSound:null,
    error:'',
    itemSelected:null,
    isRemoveAll:false,
    isPlaying:false,
    vol:50,
    itemListSelected:[],
    itemListSelectedPlaying:[],
    countNotification:0,
}
export default (state=INITSTATE,action)=>{
    console.log("actionMain",action);
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
        
        case types.M_CHANGE_VOL:{
            return{
                vol:action.vol,
            }
        }
        case types.LS_TAPPED_ITEM_FOR_STORAGING:{
            
            return{
                ...state,
                itemListSelected: [...action.itemListSelected,action.payload],
                countNotification:action.itemListSelected.length + 1,
            }
        }
        case types.LS_TAPPED_ITEM_FOR_REMOVE_STORAGING:{
            
            return{
                ...state,
                itemListSelected: action.itemListSelected.filter(item => item.key!==action.payload.key),
                countNotification:action.itemListSelected.length-1
            }
        }
        case types.MI_TAPPED_PLAY:{
            return{
                ...state,
                itemListSelectedPlaying:(action.itemListSelectedPlaying)
            }
        }
        default:{
            return state;
        }
    }
}