import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer(){

const [gifs, setGifs] = useState([]);
let [searchTerm, setSearchTerm] = useState("");



// const MY_API_KEY = "SoLXAAoHckTsWgkWDlyykV5KcE0wxk4Q";
const url = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=SoLXAAoHckTsWgkWDlyykV5KcE0wxk4Q&rating=g"
useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {setGifs(data);
      });
  }, []);

  function handleSearch(e)  {
    searchTerm = e.target.value.toLowerCase();
  
   // updates the search term in state 
   setSearchTerm(searchTerm);
  
 };

    return (
        <div>
        
        
        <GifList gifs={gifs}/>
        <GifSearch handleSearch={handleSearch} searchTerm={searchTerm}/>
        </div>
        
    )
}

export default GifListContainer;

