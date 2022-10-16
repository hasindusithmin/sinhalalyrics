import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import Songs from "./components/Songs";
import singers from "./singers.json";
import songs from "./songs.json";
import songsbysingers from "./songsbysingers.json";
import { useState } from 'react';

function App() {
  const [showHome,setshowHome] = useState(true);
  const [songsObj,setSongObj] = useState({});
  const [showLyrics,setShowLyrics] = useState('');

  const singersHandler = async()=>{
    const singer = document.getElementById('singers').value;
    const songs = songsbysingers[singers[singer]]
  }
  const songsHandler = ()=>{
    const song = document.getElementById('songs').value;
    const path = songs[song];
    setshowHome(false)
    setShowLyrics(path)
  }

  const hide_songs_show_lyrics = (key)=>{
    setSongObj({})
    setShowLyrics(key)
  }

  return (
    <>
      {showHome && <Home songs={songs} singers={singers} singersHandler={singersHandler} songsHandler={songsHandler}/>}
      {songsObj && <Songs songsObj={songsObj} handler={hide_songs_show_lyrics} />}
      {showLyrics && <Lyrics path={showLyrics}/>}
      
    </>
  )

}
export default App;