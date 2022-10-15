import './App.css';
import { useEffect, useState } from 'react';
import autoComplete from "@tarekraafat/autocomplete.js";
function App() {
  const [singers,setSingers] = useState({})
  const [songs,setSongs] = useState({})
  useEffect(()=>{
    fetch('https://sinhalalyrics.deta.dev/singers')
      .then(res=>res.json())
      .then(data=>{
        const _singers = {}
        for (const {name,key} of data) {
          _singers[name] = key;
        }
        const autoCompleteJS = new autoComplete({
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
                      autoCompleteJS.input.value = selection;
                  }
              }
          }
      });
      setSingers(_singers)
      })
      fetch('https://sinhalalyrics.deta.dev/songs')
      .then(res=>res.json())
      .then(data=>{
        const _songs = {}
        for (const {name,key} of data) {
          _songs[name] = key;
        }
        const autoCompleteJS = new autoComplete({
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
                      autoCompleteJS.input.value = selection;
                  }
              }
          }
      });
      setSongs(_songs)
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
