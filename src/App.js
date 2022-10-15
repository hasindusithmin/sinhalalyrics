import Home from "./components/Home";
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
    <Home setSingers={setSingers} setSongs={setSongs} SingersBtn={SingersBtn} SongsBtn={SongsBtn}/>
  )

}
export default App;