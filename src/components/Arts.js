import "../css/Arts.css";

export default function Arts(props){
    
    let opere = props.children;

    return(
        <div className="pancia">
            {opere.map((elem, i) => ( 
            <img key={[i]} src={"https://www.artic.edu/iiif/2/"+opere[i]+"/full/843,/0/default.jpg"} alt="" />
        ))}
        </div>
    );
}