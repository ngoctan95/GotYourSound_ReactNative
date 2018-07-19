import soundData from '../../constant/sound_info.json';
function _loadDataSoundFromJson(){
    return new Promise((resolve,reject)=>{
        if (soundData){
            setTimeout(function(){
                resolve(soundData)
            },2000) 
            
        }else{
            reject("No data found")
        }
    });
};
export const requestServiceLS={
    loadDataSoundFromJson(){
        return _loadDataSoundFromJson();
    },
}