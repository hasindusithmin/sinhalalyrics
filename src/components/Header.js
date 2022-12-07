import { useEffect, useState } from "react"


export default function Header({singer}) {

    return (
        <header className="w3-container w3-center w3-padding-48 w3-white">
            <h1 className="w3-xxxlarge"><b>SING WITH ME</b></h1>
            <h3>SINHALA <span className="w3-tag">LYRICS</span></h3>
            {singer && <h4 className="w3-text-grey w3-opacity"><b>{singer.toUpperCase()}</b></h4>}
        </header>
    )
}