import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import Songs from "./components/Songs";
import Search from "./components/Search";

import singers from "./singers.json";
import songs from "./songs.json";
import songsbysingers from "./songsbysingers.json";
import { useState } from 'react';
import LyricsType2 from "./components/LyricsType2";
import Alphabet from "./components/Alphaber";
function App() {
  const [showHome,setshowHome] = useState(true);
  const [showSearch,setShowSearch] = useState(false);
  const [songsObj,setSongObj] = useState({});
  const [showLyrics,setShowLyrics] = useState('');
  const [showLyricsType2,setShowLyricsType2] = useState('');

  const singersHandler = async()=>{
    const singer = document.getElementById('singers').value;
    const songs = songsbysingers[singers[singer]];
    sessionStorage.setItem('songs',JSON.stringify(songs))
    setshowHome(false)
    setSongObj(songs)
  }
  const songsHandler = ()=>{
    const song = document.getElementById('songs').value;
    const path = songs[song];
    setshowHome(false)
    setShowSearch(false)
    setShowLyrics(path)
  }

  const hide_songs_show_lyrics = (key)=>{
    setSongObj({})
    setShowLyricsType2(key)
  }

  const lyrics_handler_show_home = ()=>{
      setShowLyrics('')
      setShowLyricsType2('')
      setshowHome(true)
  }

  const lyrics_handler_show_search = ()=>{
      setShowLyrics('')
      setShowSearch(true)
  }

  const previousButtonHander = ()=>{
    setShowLyricsType2(false)
    const songs = JSON.parse(sessionStorage.getItem('songs'))
    setSongObj(songs)
  }

  return (
    <>
      <Alphabet />
      {/* {showHome && <Home songs={songs} singers={singers} singersHandler={singersHandler} songsHandler={songsHandler}/>}
      {songsObj && <Songs songsObj={songsObj} handler={hide_songs_show_lyrics} />}
      {showLyrics && <Lyrics path={showLyrics}  homebtn={lyrics_handler_show_home} searchbtn={lyrics_handler_show_search} />}
      {showLyricsType2 && <LyricsType2 path={showLyricsType2} homebtn={lyrics_handler_show_home} previousBtn={previousButtonHander}/>}
      {showSearch && <Search  handler={songsHandler}/>} */}
    </>
  )

}
export default App;