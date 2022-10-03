import { useState, useEffect } from 'react';
import ListButtons from './ListButtons';
import "../css/Artists.css";

export default function Artists(props){
    
    let getArtist = props.children;
    const [autori, setAutori] = useState([]);
    const [opera, setOpera] = useState([]);
    
    useEffect(() => {
        
        async function prendiAutori() {
            
            let autori_one = [];

            //Chiamata API
            //http://api.artic.edu/docs/
            const url = `https://api.artic.edu/api/v1/artworks`;
            let res = await fetch(url);
            let resJson = await res.json();
            
            let operaJSON = [];
            //Costruisci l'array coi dati che mi servono
            for (let i=0;i<resJson.data.length;i++)
            {    
                if(resJson.data[i].artist_title==null){
                    autori_one[i] = null; operaJSON.push({"artista":"Misti Sconosciuti", "id_foto":resJson.data[i].image_id} );
                }else{autori_one[i] = resJson.data[i].artist_title; operaJSON.push({"artista":resJson.data[i].artist_title, "id_foto":resJson.data[i].image_id});}
            }
            
            setOpera(operaJSON);

            //elimino i duplicati e li conto per ogni voce
            autori_one.sort();
         
            //rimuove valori null
            autori_one = autori_one.filter(function (el) {
                return el != null;
            });

            const counts = {};
            autori_one.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            setAutori(Object.entries(counts));
        };
        prendiAutori();
    },[]);
    
    return(
        <div className="buttons">
            <ul>
                {autori.map((elem, i) => (
                    <li key={i}>
                        <ListButtons opere={opera} onClick={getArtist} artistName={elem[0]} artsQt={elem[1]}/>
                    </li>
                ))}
            </ul>
        </div>  
    );   
}