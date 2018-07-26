import soundData from '../../constant/sound_info.json';
import SoundPlayer from 'react-native-sound-player';
import {
    Alert 
} from 'react-native';
// import MusicControl from 'react-native-music-control';
import Sound from 'react-native-sound';
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
                    if(item.payload.music!=null){
                        console.log(item.payload.music);
                        Sound.setActive(false);
                        Sound.setCategory("Playback");
                        Sound.setActive(true);
                        var whoosh = new Sound(item.payload.music.concat('.mp3'), Sound.MAIN_BUNDLE, (error) => {
                            if (error) {
                                Alert.alert(
                                    'Failure',
                                    'Got failure while loading this sound for you guy',
                                    [],
                                    { cancelable: false }
                                  );
                              resolve(false);
                            }else{
                                    whoosh.play((success)=>{
                                        if (success) {
                                            resolve(true);
                                        } else {
                                        //   console.log('playback failed due to audio decoding errors');
                                        }
                                    });
                            }
                          });
                            
                    }else{
                        Alert.alert(
                            'Failure',
                            "No file found",
                            [],
                            { cancelable: false }
                          );
                        resolve (false);
                    }
                }catch(err){
                    Alert.alert(
                        'Error',
                        "Can not play this file",
                        [],
                        { cancelable: false }
                      );
                    resolve (false);
                }
            }else{
                Sound.setActive(false);
                Sound.release();
                resolve (false);
            }
        }else{
            console.log("Sound data got err");
            resolve(false);
        }
    })
}
function _stopItemAudioLS(item){
    return new Promise((resolve,reject)=>{
        try{
            
            Sound.setActive(false);
            resolve(false);
        }catch(err){
            reject(err);
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