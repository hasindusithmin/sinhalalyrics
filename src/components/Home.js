import { useEffect } from 'react';
import autoComplete from "@tarekraafat/autocomplete.js";
import microphone from "../microphone.gif"
import { CgMoreO } from 'react-icons/cg';

function Home({songs,singers,singersHandler,songsHandler,alphaHandler}) {
  
  useEffect(()=>{
    sessionStorage.removeItem('singer')
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
    <>
        <div className="w3-display-container w3-wide" id="home">
            <img className="w3-image" src={microphone} alt="microphone" width="1600" height="1060" />
            <div className="w3-display-middle w3-padding-large">
            <h1 className="w3-jumbo w3-wide w3-hide-small w3-animate-zoom w3-text-grey"><b>SINHALA LYRICS</b></h1>
            <p className='w3-text-teal w3-justify'>
                <b>
                We are provide sinhala song lyrics that you can easily find a lyric of a sinhala song. You can find a song lyric very fast by using search module it has categorize songs by artist.
                </b>
            </p>
                <h1 className="w3-text-white">
                    <input id="singers" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
                </h1>
                <h6><button className="w3-button w3-light-grey w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={singersHandler}>SEARCH</button></h6>
                <h1 className="w3-text-white">
                    <input id="songs" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off"/>
                </h1>
                <h6><button className="w3-button w3-light-grey w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={songsHandler}>SEARCH</button></h6>
            </div>
        </div>
        <footer className="w3-center  w3-padding-48 w3-large">
            <button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={alphaHandler}>
                <span><CgMoreO  className='w3-spin' size={18} style={{verticalAlign:'middle'}}/></span>&nbsp;<span style={{verticalAlign:'middle'}}>SEE MORE</span>&nbsp;<span><CgMoreO  className='w3-spin' size={18} style={{verticalAlign:'middle'}}/></span>
            </button>
        </footer>
    </>
  );
}

export default Home;
