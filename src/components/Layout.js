import Artists from "./Artists";
import Arts from "./Arts";
import { useState } from 'react';
import "../css/Layout.css";

export default function Layout(){

    const [opere, setOpere] = useState([]);
    const [visibleMsg, setVisibleMsg] = useState("visibleMsg");

    const getArtist = (selectOpera) => {
        //questo è l'on click che attraverso il figlio Artists passo al bottono relativo all'artista
        //per valorizzare qui una variabile o stato da passare al figlio Arts
        console.log("layout: "+selectOpera);
        setOpere(selectOpera);
        setVisibleMsg("invisibleMsg")
    };

    return(
        <div className="container">
            <div id="uozdis">cosa stai vedendo: 12 opere casuali, di alcuni degli artisti ospitati all' <a href="https://www.artic.edu/">Art Institut of Chicago</a>. Riestratti dal museo alcune volte al giorno. A cura di <a href="https://github.com/theflaviomercuri">theflaviomercuri</a></div>
            <Artists>{getArtist}</Artists>
            <div className={visibleMsg}>Scegli dal menu in alto l'autore di cui visionare le opere.</div>
            <Arts>{opere}</Arts>
        </div>
    );
}