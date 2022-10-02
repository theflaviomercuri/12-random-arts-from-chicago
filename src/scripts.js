export default async function prendiAutori(){

    let autori = [];

    //estraggo il json dall'api
    const url = `https://api.artic.edu/api/v1/artworks`;
    let res = await fetch(url);
    let resJson = await res.json();
 
    for (let i=0;i<resJson.data.length;i++)
    {    
        if(resJson.data[i].artist_title==null){
            autori[i] = "Misti Sconosciuti"
        }else{autori[i] = resJson.data[i].artist_title;}
    }
    autori.sort();
    const counts = {};
    autori.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });    
    return autori;
}