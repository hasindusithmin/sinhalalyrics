import { useEffect, useState } from "react";
import alphabet from "../alphabet.json"
import songsbysingers from "../songsbysingers.json"
import songs from "../songs.json"

export default function Alphabet() {
    const [showSingerList,setShowSingerList] = useState(true)
    const [songsObj,setSongObj] = useState(false);
    const [path,setPath] = useState(false)
    const alpha = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    let i = 0;
    const render = (i)=>{
        const inner = document.getElementById('singers')
        if (inner != null) document.getElementById('singers').innerHTML = ''
        const singers =  alphabet[alpha[i]];
        const ul = document.createElement('ul');
        ul.className = 'w3-ul w3-hoverable w3-monospace'
        singers.forEach(singer => {
            const li = document.createElement('li');
            const id = Object.values(singer)
            li.id = id
            li.innerText = Object.keys(singer)
            li.onclick = ()=>{
                const songs = songsbysingers[id[0]]
                setShowSingerList(false)
                setSongObj(songs)
            }
            ul.appendChild(li)
        })
        document.getElementById('singers').appendChild(ul)
    }
    useEffect(()=>{render(0)},[])
    
    const minus = ()=>{
        i = i !== 0 ? i -1 : 25
        sessionStorage.setItem('i',i)
        render(i);
    }
    const plus = ()=>{
        i = i !== 25 ? i +1 : 0
        sessionStorage.setItem('i',i)
        render(i);
    }
    const showPrev = ()=>{
        const str_i = sessionStorage.getItem('i')
        i = parseInt(str_i)
        setSongObj(false)
        setShowSingerList(true)
    }

    const showLyrics = e => {
        const song = songs[e.target.innerHTML]
        setSongObj(false)
        setPath(song)
    }

    return (
        <>
            {
                showSingerList 
                &&
                <div className="w3-container">
                    <div className="w3-bar">
                        <button className="w3-bar-item w3-button w3-left w3-light-grey" onClick={minus}>« Prev</button>
                        <button className="w3-bar-item w3-button w3-right w3-green" onClick={plus}>Next »</button>
                    </div>
                    <div className="w3-container w3-center w3-white" id="singers"></div>
                </div>
            }
            {  
                songsObj
                &&
                <div className="w3-container">
                    <div className="w3-bar">
                        <button className="w3-bar-item w3-button w3-left w3-light-grey" onClick={showPrev} >« List</button>
                    </div>
                    <ul className="w3-ul w3-hoverable w3-monospace w3-center">
                        {Object.entries(songsObj).map(arr => <li onClick={showLyrics} key={arr[1]}>{arr[0]}</li>)}
                    </ul>
                </div>
            }
            {
                path
                &&
                <div className="w3-container">
                    <div className="w3-bar">
                        <button className="w3-bar-item w3-button w3-left w3-light-grey" >« Home&nbsp;</button>
                        <button className="w3-bar-item w3-button w3-right w3-green" >Search »</button>
                    </div>
                    <div className="w3-center w3-padding-top">
                        <img  src={`https://asoptbhxcojoswrahsdk.supabase.co/storage/v1/object/public/lyrics/${path}`} alt="lyrics" className="w3-image"/>
                    </div>
                </div>
            }
        </>
    )
}