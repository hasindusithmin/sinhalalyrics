import { useEffect } from "react";
import alphabet from "../alphabet.json"


export default function Alphabet() {
    const alpha = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    let i = 0;
    const render = (i)=>{
        const singers =  alphabet[alpha[i]];
        const ul = document.createElement('ul');
        ul.className = 'w3-ul w3-hoverable w3-monospace'
        singers.forEach(singer => {
            const li = document.createElement('li');
            const id = Object.values(singer)
            li.id = id
            li.innerText = Object.keys(singer)
            li.onclick = ()=>{
                console.log(id)
            }
            ul.appendChild(li)
        })
        document.getElementById('singers').appendChild(ul)
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
            <div className="w3-container w3-center w3-white" id="singers"></div>
        </div>
    )
}