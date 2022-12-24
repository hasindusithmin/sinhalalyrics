import { useEffect } from 'react';
import autoComplete from "@tarekraafat/autocomplete.js";
import microphone from "../microphone.gif"
import { CgMoreO } from 'react-icons/cg';

function Home({ songs, singers, singersHandler, songsHandler, alphaHandler }) {

    useEffect(() => {
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

    }, [])
    return (
        <div className='w3-content'>
            <div className='w3-container w3-bold w3-justify'>
                <p className='w3-animate-left'>
                    <b>
                        Welcome to the ultimate destination for Sinhala music lovers! Our website is home to a vast collection of lyrics from your favorite Sinhala artists.
                    </b>
                </p>
                <p className='w3-animate-right'>
                    <b>
                        With an easy-to-use interface and two search options (by singer name or song name), finding the lyrics you're looking for has never been easier. You can also browse through our alphabetical list of singers to discover new music and find hidden gems.
                    </b>
                </p>
            </div>
            <div className="w3-display-container" id="home">
                <img className="w3-image" src={microphone} alt="microphone" width="1600" height="1060" />
                <div className="w3-display-middle w3-padding-large">
                    <h1 className="w3-text-white">
                        <input id="singers" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
                    </h1>
                    <h6><button className="w3-button w3-light-grey w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={singersHandler}>SEARCH</button></h6>
                    <h1 className="w3-text-white">
                        <input id="songs" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
                    </h1>
                    <h6><button className="w3-button w3-light-grey w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={songsHandler}>SEARCH</button></h6>
                    <div className="w3-center  w3-padding-48 w3-large">
                        <button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={alphaHandler}>
                            <span><CgMoreO className='w3-spin' size={18} style={{ verticalAlign: 'middle' }} /></span>&nbsp;<span style={{ verticalAlign: 'middle' }}>SEE MORE</span>&nbsp;<span><CgMoreO className='w3-spin' size={18} style={{ verticalAlign: 'middle' }} /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w3-container w3-justify'>
                <p>
                    <b>
                        In addition to being able to search and browse for lyrics, our site also has Progressive Web App (PWA) functionality. This means you can install it on your device and access it offline, making it easy to access your favorite lyrics even when you don't have an internet connection.
                    </b>
                </p>
                <p>
                    <b>
                        Thank you for visiting our website. We hope you have a great time discovering new music and finding the lyrics you love.
                    </b>
                </p>
            </div>
        </div>
    );
}

export default Home;
