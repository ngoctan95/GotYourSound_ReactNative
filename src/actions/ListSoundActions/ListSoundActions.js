import * as types from '../Types/types';
export const loadingSoundLS=() =>{
    return{
        type:types.LS_LOADING_SOUND,
    }
}
export const loadedSoundLS=(data)=>{
    return {
        type:types.LS_LOADED_SOUND,
        payload: data
    }
}
export const loadErrorSoundLS=(err)=>{
    return{
        type:types.LS_LOAD_ERROR_SOUND,
        payload:err
    }
}
export const selectedItem=(item)=>{
    return{
        type:types.LS_SELECTED_ITEM,
        payload:item
    }
}
export const deSelectedItem=(item)=>{
    return{
        type:types.LS_DE_SELECTED_ITEM,
        payload:item
    }
}
export const tappedItem=(item)=>{
    return{
        type:types.LS_TAPPED_ITEM,
        payload:item
    }
}