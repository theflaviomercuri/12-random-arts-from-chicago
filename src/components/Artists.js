import { useState, useEffect } from 'react';

export default function Artists(){
    
    const [autori, setAutori] = useState([]);
    
    useEffect(() => {
        
        async function prendiAutori() {
            
            let autori_one = [];

            //Chiamata API
            const url = `https://api.artic.edu/api/v1/artworks`;
            let res = await fetch(url);
            let resJson = await res.json();
        
            //Costruisci l'array coi dati che mi servono
            for (let i=0;i<resJson.data.length;i++)
            {    
                if(resJson.data[i].artist_title==null){
                    autori_one[i] = "Misti Sconosciuti"
                }else{autori_one[i] = resJson.data[i].artist_title;}
            }
            
            //elimino i duplicati e li conto per ogni voce
            autori_one.sort();
            const counts = {};
            autori_one.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            setAutori(Object.entries(counts));
        };
        prendiAutori();
    },[]);
    
    return(
        <div className="buttons">
            {autori.map((elem, i) => (
                <li key={i}>
                    {elem[0]} ({elem[1]})
                </li>
            ))}
        </div>  
    );   
}