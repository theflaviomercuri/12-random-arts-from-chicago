import "../css/ListButtons.css"

export default function ListButtons({artistName, artsQt, onClick, opere}){

    let selectOpere = [];
    for(let i=0; i<12; i++)
    {
        if(opere[i].artista==artistName)
        {
           selectOpere[i] = opere[i].id_foto;
        }
    }
    
    //rimuove valori vuoti
    selectOpere = selectOpere.filter(function (el) {
        return el != null;
      });

    return(
        <button onClick={()=>onClick(selectOpere)}>{artistName} {"("+artsQt+")"}</button>
    );
}