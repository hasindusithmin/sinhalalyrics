import autoComplete from "@tarekraafat/autocomplete.js";
import { useEffect } from "react";
import songs from "../songs.json";

export default function Search({handler}) {

    useEffect(()=>{
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
        <div className="w3-container w3-center">
            <h1 className="w3-text-white">
                <input id="songs" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
            </h1>
            <h6>
            <button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={handler}>SEARCH</button>
            </h6>

        </div>
    )
}