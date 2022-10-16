
function Lyrics({path,homebtn,searchbtn}) {
    return (
        
        <div className="w3-container">
            <div className="w3-bar">
                <button className="w3-bar-item w3-button w3-left w3-light-grey" onClick={homebtn}>« Home&nbsp;</button>
                <button className="w3-bar-item w3-button w3-right w3-green" onClick={searchbtn}>Search »</button>
            </div>
            <div className="w3-center w3-padding-top">
                <img  src={`https://asoptbhxcojoswrahsdk.supabase.co/storage/v1/object/public/lyrics/${path}`} alt="lyrics" className="w3-image"/>
            </div>
        </div>
    )
    

}

export default Lyrics;