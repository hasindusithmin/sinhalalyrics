

export default function Songs({handler}) {

    const songs = [
        {
          "name": "Dinayaka Oba Ma Hiri Poda Wesse",
          "key": "2021/12/dinayaka-oba-ma-hiri-poda-wesse"
        },
        {
          "name": "Innam Ma Ahase Tharu [Samada]",
          "key": "2021/12/innam-ma-ahase-tharu-samada"
        },
        {
          "name": "Mage Es Diha Bala",
          "key": "2021/12/mage-es-diha-bala"
        },
        {
          "name": "Mal Peththak Se Susinidu Sitha",
          "key": "2021/12/mal-peththak-se-susinidu-sitha"
        },
        {
          "name": "Mandaram Wahi Watena [Amma]",
          "key": "2021/12/mandaram-wahi-watena-amma"
        },
        {
          "name": "Oba Pawasai Ma Hara Yana Bawa [Wassanaya]",
          "key": "2021/12/oba-pawasai-ma-hara-yana-bawa-wassanaya"
        },
        {
          "name": "Pahan Kanuwe Hewana Thamai [Arumosam]",
          "key": "2021/12/pahan-kanuwe-hewana-thamai-arumosam"
        },
        {
          "name": "Punchi Punchi Adambarakari",
          "key": "2021/12/punchi-punchi-adambarakari"
        },
        {
          "name": "Sandu Rathri Akase [Moon Light]",
          "key": "2021/12/sandu-rathri-akase-moon-light"
        },
        {
          "name": "Seethala Sarath Sande [Tharindana]",
          "key": "2021/12/seethala-sarath-sande-tharindana"
        },
        {
          "name": "Wassanaye Kandulu Wiyali Yawi [Nirwanaye]",
          "key": "2021/12/wassanaye-kandulu-wiyali-yawi-nirwanaye"
        },
        {
          "name": "Wikasitha Nithambani",
          "key": "2021/12/wikasitha-nithambani"
        }
      ]

    return (
        <div className="w3-container w3-center w3-white">
            <ul className="w3-ul w3-hoverable w3-monospace">
                {songs.map(({name,key})=><li onClick={()=>{handler(key)}} key={key}>{name}</li>)}
            </ul>
        </div>
    )
    

}