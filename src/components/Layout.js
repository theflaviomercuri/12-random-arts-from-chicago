import Artists from "./Artists";
import Arts from "./Arts";

export default function Layout(){

    const getArtist = (artistName) => {
        //questo è l'on click che attraverso il figlio Artists passo al bottono relativo all'artista
        //per valorizzare qui una variabile o stato da passare al figlio Arts
    };

    return(
        <div className="container">
            <Artists>{getArtist}</Artists>
            {/* artists passerà funzione e nome dell'artista a button che onclick esegue la callback passando il nome. */}
            <Arts/>
        </div>
    );
}