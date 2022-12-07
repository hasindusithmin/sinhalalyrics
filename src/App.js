import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import Songs from "./components/Songs";
import Search from "./components/Search";
import SearchSingers from "./components/SearchSingers";
import singers from "./singers.json";
import songs from "./songs.json";
import songsbysingers from "./songsbysingers.json";
import { useState } from 'react';
import LyricsType2 from "./components/LyricsType2";
import Alphabet from "./components/Alphabet";
import Header from "./components/Header";
function App() {
  const [showHome,setshowHome] = useState(true);
  const [showSearch,setShowSearch] = useState(false);
  const [showSingersSearch,setShowSingersSearch] = useState(false);
  const [showAlpha,setShowAlpha] = useState(false);
  const [songsObj,setSongObj] = useState(false);
  const [showLyrics,setShowLyrics] = useState('');
  const [showLyricsType2,setShowLyricsType2] = useState('');
  const [singer,setSinger] = useState(null);

  const singersHandler = async()=>{
    const singer = document.getElementById('singers').value;
    if (singer !== '') {
      const songs = songsbysingers[singers[singer]];
      sessionStorage.setItem('songs',JSON.stringify(songs))
      setshowHome(false)
      setShowSingersSearch(false)
      setSongObj(songs)
    }
  }
  
  const songsHandler = ()=>{
    const song = document.getElementById('songs').value;
    if (song !== '') {
      const path = songs[song];
      setshowHome(false)
      setShowAlpha(false)
      setShowSearch(false)
      setShowLyrics(path)
    }
  }

  const hide_songs_show_lyrics = (key)=>{
    setSongObj(false)
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

  const alphaHandler = () => {
    setshowHome(false)
    setShowAlpha(true)
  }

  const songsHome =  () => {
      setSongObj(false)
      setshowHome(true)
  }

  const songSearch = () => {
      setSongObj(false)
      setShowSingersSearch(true)
  }

  return (
    <>
      <Header singer={singer} />
      {showAlpha && <Alphabet setSinger={setSinger} />}
      {showHome && <Home songs={songs} singers={singers} singersHandler={singersHandler} songsHandler={songsHandler} alphaHandler={alphaHandler}/>}
      {songsObj && <Songs songsObj={songsObj} handler={hide_songs_show_lyrics} songsHome={songsHome} songSearch={songSearch}/>}
      {showLyrics && <Lyrics path={showLyrics}  homebtn={lyrics_handler_show_home} searchbtn={lyrics_handler_show_search} />}
      {showLyricsType2 && <LyricsType2 path={showLyricsType2} homebtn={lyrics_handler_show_home} previousBtn={previousButtonHander}/>}
      {showSearch && <Search  handler={songsHandler}/>}
      {showSingersSearch && <SearchSingers  handler={singersHandler}/>}
    </>
  )

}
export default App;