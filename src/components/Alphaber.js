import { useEffect } from "react";
import alphabet from "../alphabet.json"

function SingersList(singers) {
    let txt = ''
    singers.forEach(singer => {
        txt += `<li key=${Object.values(singer)} >${Object.keys(singer)}</li>\n`
    })
    return txt;
}


export default function Alphabet() {
    const alpha = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    let i = 0;
    const render = (i)=>{
        const singers =  alphabet[alpha[i]];
        const html = SingersList(singers)
        document.getElementById('ul').innerHTML = html
    }
    useEffect(()=>{render(0)},[])
    
    const minus = ()=>{
        i = i !== 0 ? i -1 : 25
        render(i);
    }
    const plus = ()=>{
        i = i !== 25 ? i +1 : 0
        render(i);
    }
    return (
        <div className="w3-container">
            <div className="w3-bar">
                <button className="w3-bar-item w3-button w3-left w3-light-grey" onClick={minus}>« Prev</button>
                <button className="w3-bar-item w3-button w3-right w3-green" onClick={plus}>Next »</button>
            </div>
            <div className="w3-container w3-center w3-white">
                <ul className="w3-ul w3-hoverable w3-monospace" id="ul"></ul>
            </div>
        </div>
    )
}