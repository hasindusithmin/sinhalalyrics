import { useEffect } from 'react';
import autoComplete from "@tarekraafat/autocomplete.js";
import music from "../music.jpg"

function Home({songs,singers,singersHandler,songsHandler}) {
  
  useEffect(()=>{
    const autoCompleteJS1 = new autoComplete({
      selector: "#singers",
      placeHolder: "Search for singers ...",
      data: {
          src: Object.keys(singers),
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
    const autoCompleteJS2 = new autoComplete({
      selector: "#songs",
      placeHolder: "Search for songs ...",
      data: {
          src: Object.keys(songs),
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
    <div className="w3-display-container w3-wide" id="home">
      <img className="w3-image" src={music} alt="Music" width="1600" height="1060" />
      <div className="w3-display-left w3-padding-large">
      <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>SINHALA LYRICS</b></h1>
        <h1 className="w3-text-white">
            <input id="singers" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
        </h1>
        <h6><button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={singersHandler}>SEARCH</button></h6>
        <h1 className="w3-text-white">
            <input id="songs" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off"/>
        </h1>
        <h6><button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={songsHandler}>SEARCH</button></h6>
      </div>
  </div>
  );
}

export default Home;
