

export default function Songs({ handler, songsObj,songsHome,songSearch }) {
    return (
        <div className="w3-container w3-white">
            <div className="w3-bar">
                <button className="w3-bar-item w3-button w3-left w3-light-grey" onClick={songsHome}>« Home&nbsp;</button>
                <button className="w3-bar-item w3-button w3-right w3-green" onClick={songSearch}>Search »</button>
            </div>
            <div className="w3-center w3-padding">
                <ul className="w3-ul w3-hoverable w3-monospace" id="ul">
                    {Object.entries(songsObj).map(arr => <li onClick={() => { handler(arr[1]) }} key={arr[1]}>{arr[0]}</li>)}
                </ul>
            </div>
        </div>
    )


}