import soundData from '../../constant/sound_info.json';
import SoundPlayer from 'react-native-sound-player';

function _loadDataSoundFromJson(){
    return new Promise((resolve,reject)=>{
        if (soundData){
            setTimeout(function(){
                resolve(soundData)
            },1500) 
            
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
                    SoundPlayer.playSoundFile('guitar','mp3');
                    SoundPlayer.onFinishPlaying((success:boolean)=>{
                      SoundPlayer.unmount();  
                    })
                }catch(err){
                    console.log(`cannot play the sound file`, err);
                }
            }else{
                SoundPlayer.stop();
            }
            
            resolve(item)
        }else{
            reject("Sound data got err")
        }
    })
}
export const requestServiceLS={
    loadDataSoundFromJson(){
        return _loadDataSoundFromJson();
    },
    playTappedItemLS(item){
        return _playItemAudioLS(item);
    }
}