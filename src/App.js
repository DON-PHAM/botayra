import './App.css';
// import * as mobilenet from '@tensorflow-models/mobilenet';
// import * as knnClassifier from '@tensorflow-models/knn-classifier';
// import {Howl} from 'howler';
// import soundUrl from './assets/hey_sondn.mp3';
// var sound = new Howl({
//   src:[soundUrl]
// });
//sound.play();
import React, {useEffect, useRef} from 'react'; 
function App() {
  const video = useRef();
  const init = async () => {
    await setupCamera();
  }

  const setupCamera = () => {
    return new Promise((resolve, reject) => {
      navigator.getUseMedia = navigator.getUseMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if(navigator.getUseMedia) {
        navigator.getUseMedia(
          { video: true },
          stream => {
            video.current.srcObject = stream;
            video.current.addEventListener('loadeddata', resolve);
          },
          error => reject(error)
        );
      }else {
        reject();
      }
    })
  } 
  useEffect(() => {
    init();

    return () => {

    }
  },[])
  return (
    <div className="main">
      <video className='video' autoPlay ref={video}>

      </video>
      <div className='control'>
        <button className='btn'>Train 1</button>
        <button className='btn'>Train 2</button>
        <button className='btn'>Run</button>
      </div>
    </div>
  );
}

export default App;
