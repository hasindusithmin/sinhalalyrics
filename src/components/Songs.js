

export default function Songs({handler,songlist}) {

    return (
        <div className="w3-container w3-center w3-white">
            <ul className="w3-ul w3-hoverable w3-monospace">
                {songlist.map(({name,key})=><li onClick={()=>{handler(key)}} key={key}>{name}</li>)}
            </ul>
        </div>
    )
    

}