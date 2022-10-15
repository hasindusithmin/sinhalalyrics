
function Lyrics({path}) {

    return (
        <div className="w3-container w3-center w3-white">
            <img  src={`https://sinhalalyrics.deta.dev/lyrics?key=${path}`} alt="lyrics" className="w3-image"/>
        </div>
    )
    

}

export default Lyrics;