import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import { useState } from 'react';

function App() {

  const [singers,setSingers] = useState({})
  const [songs,setSongs] = useState({})

  const SingersBtn = ()=>{
    const singer = document.getElementById('singers').value;
    console.log(singers[singer]);
  }
  const SongsBtn = ()=>{
    const song = document.getElementById('songs').value;
    console.log(songs[song]);
  }

  return (
    <>
      {/* <Lyrics path={'2021/12/dinayaka-oba-ma-hiri-poda-wesse'}/> */}
      {/* <Home setSingers={setSingers} setSongs={setSongs} SingersBtn={SingersBtn} SongsBtn={SongsBtn}/> */}
    </>
  )

}
export default App;