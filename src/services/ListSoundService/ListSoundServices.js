import soundData from '../../constant/sound_info.json';
import SoundPlayer from 'react-native-sound-player';

function _loadDataSoundFromJson(){
    return new Promise((resolve,reject)=>{
        if (soundData){
            setTimeout(function(){
                resolve(soundData)
            },500) 
            
        }else{
            reject("No data found")
        }
    });
};
function _playItemAudioLS(item){
    console.log("play",item);
    return new Promise((resolve,reject)=>{
        if (item){
            if(item.isPlaying){
                try{
                    SoundPlayer.playSoundFile('sound','mp3');
                      SoundPlayer.onFinishedPlaying((success:boolean)=>{
                        if(success){  
                        resolve (true)
                        }
                      })
                }catch(err){
                    console.log(`cannot play the sound file`, err);
                }
            }else{
                SoundPlayer.stop();
            }
        }else{
            console.log("Sound data got err");
            reject("false");
        }
    })
}
function _stopItemAudioLS(item){
    return new Promise((resolve,reject)=>{
        try{
            
            SoundPlayer.stop();
            resolve(item)
        }catch(err){
            reject(err)
        }
    })
}
export const requestServiceLS={
    loadDataSoundFromJson(){
        return _loadDataSoundFromJson();
    },
    playTappedItemLS(item){
        return _playItemAudioLS(item);
    },
    stopItemItemAudioLS(item){
        return _stopItemAudioLS(item);
    }
}