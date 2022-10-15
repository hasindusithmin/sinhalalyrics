import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import Songs from "./components/Songs";
import { useState } from 'react';

function App() {
  const [showHome,setshowHome] = useState(true);
  const [singers,setSingers] = useState({});
  const [songs,setSongs] = useState({});
  const [songslist,setSongList] = useState([]);
  const [lyricspath,setLyricsPath] = useState('');

  const SingersBtn = async()=>{
    const singer = document.getElementById('singers').value;
    const key = singers[singer];
    const res = await fetch(`https://sinhalalyrics.deta.dev/songsbysinger?key=${key}`);
    const data = await res.json();
    setshowHome(false);
    setSongList(data);

  }
  const SongsBtn = ()=>{
    const song = document.getElementById('songs').value;
    setshowHome(false);
    setLyricsPath(songs[song])
  }

  const hide_songs_show_lyrics = (key)=>{
    setSongList([])
    setLyricsPath(key)
  }

  return (
    <>
      {showHome && <Home setSingers={setSingers} setSongs={setSongs} SingersBtn={SingersBtn} SongsBtn={SongsBtn}/>}
      {songslist && <Songs songlist={songslist} handler={hide_songs_show_lyrics} />}
      {lyricspath && <Lyrics path={lyricspath}/>}
      
    </>
  )

}
export default App;