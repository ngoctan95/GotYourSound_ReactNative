import * as types from '../Types/types';
export const loadingSoundM=()=>{
    return{
        type:types.M_LOADING_SOUND
    }
}
export const loadedSoundM=(data)=>{
    return{
        type:types.M_LOADED_SOUND,
        payload:data
    }
}
export const loadErrorSoundM=(err)=>{
    return{
        type:types.M_LOAD_ERROR_SOUND,
        payload:err
    }
}
export const tappedPlayItemM=(item)=>{
    return{
        type:types.M_TAPPED_PLAY,
        payload:item
    }
}
export const unTappedPlayItemM=(item)=>{
    return {
        type:types.M_UN_TAPPED_PLAY,
        payload:item
    }
}
export const selectRemoveItemM=(item)=>{
    return{
        type:types.M_SELECT_REMOVE_ITEM,
        payload:item
    }
}
export const selectRemoveAllM=()=>{
    return{
        type:types.M_SELECT_REMOVE_ALL,
    }
}
export const changeVolM=(vol)=>{
    return{
        type:types.M_CHANGE_VOL,
        payload:vol
    }
}