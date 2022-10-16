

export default function Songs({handler,songsObj}) {
    return (
        <div className="w3-container w3-center w3-white">
            <ul className="w3-ul w3-hoverable w3-monospace">
                {Object.entries(songsObj).map(arr=><li onClick={()=>{handler(arr[1])}} key={arr[1]}>{arr[0]}</li>)}
            </ul>
        </div>
    )
    

}