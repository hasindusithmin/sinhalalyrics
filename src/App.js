import './App.css';
import { useEffect, useState } from 'react';
import autoComplete from "@tarekraafat/autocomplete.js";
import Singers from "./singers.json"
import Songs from "./songs.json"
function App() {
  const [singers,setSingers] = useState({})
  const [songs,setSongs] = useState({})
  useEffect(()=>{
    const _singers = {}
    for (const {name,key} of Singers) {
      _singers[name] = key;
    }
    setSingers(_singers)
    const autoCompleteJS1 = new autoComplete({
      selector: "#singers",
      placeHolder: "Search for singers ...",
      data: {
          src: Object.keys(_singers),
          cache: true,
      },
      resultItem: {
          highlight: true
      },
      events: {
          input: {
              selection: (event) => {
                  const selection = event.detail.selection.value;
                  autoCompleteJS1.input.value = selection;
              }
          }
      }
    })
    const _songs = {}
    for (const {name,key} of Songs) {
      _songs[name] = key;
    }
    setSongs(_songs)
    const autoCompleteJS2 = new autoComplete({
      selector: "#songs",
      placeHolder: "Search for songs ...",
      data: {
          src: Object.keys(_songs),
          cache: true,
      },
      resultItem: {
          highlight: true
      },
      events: {
          input: {
              selection: (event) => {
                  const selection = event.detail.selection.value;
                  autoCompleteJS2.input.value = selection;
              }
          }
      }
    })

  },[])
  return (
    <div className="App">
        <input id="singers" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off"/>
        <input id="songs" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off"/>

    </div>
  );
}

export default App;
