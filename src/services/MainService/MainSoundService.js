import soundData from '../../constant/sound_info.json';
import {
    Alert 
} from 'react-native';
import Sound from 'react-native-sound';

function _playItemLonelySound(item){
    // const Sound = require('react-native-sound');
    Sound.setCategory("Playback");
    Sound.setActive(true);
    
    // console.log("&&&&&&",item.itemListSelectedPlaying[i].music);
    var whoosh = new Sound(item.music.concat('.mp3'), Sound.MAIN_BUNDLE, (error) => {
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
                        whoosh.play();
                    } else {
                    //   console.log('playback failed due to audio decoding errors');
                    }
                });
        }
      });
}
function _playListItemSound(item){
    return new Promise((resolve,reject)=>{
        Sound.setActive(false);
        console.log("listtt",item);
        if(item.itemListSelectedPlaying.length>0){
            try{
                var i;
                for(i=0;i<item.itemListSelectedPlaying.length;i++){
                    console.log("(*(********** ",item.itemListSelectedPlaying[i]);
                    _playItemLonelySound(item.itemListSelectedPlaying[i]);
                }
            }catch(error){
                console.log("---err",error);
            }
        }else{
            const Sound = require('react-native-sound');
            Sound.setActive(false);
        }    
    })
}
export const requestServiceM={
    playListItemSound(item){
        return _playListItemSound(item);
    },
} 