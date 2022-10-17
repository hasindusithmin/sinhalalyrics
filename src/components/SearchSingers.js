

import autoComplete from "@tarekraafat/autocomplete.js";
import { useEffect } from "react";
import singers from "../singers.json";

export default function SearchSingers({handler}) {

    useEffect(()=>{
        const autoCompleteJS2 = new autoComplete({
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
                        autoCompleteJS2.input.value = selection;
                    }
                }
            }
          })
    },[])

    return (
        <div className="w3-container w3-center">
            <h1 className="w3-text-white">
                <input id="singers" type="search" dir="ltr" spellCheck={false} autoCorrect="off" autoComplete="off" autoapitalize="off" />
            </h1>
            <h6>
            <button className="w3-button w3-white w3-padding w3-large w3-opacity w3-hover-opacity-off" onClick={handler}>SEARCH</button>
            </h6>

        </div>
    )
}