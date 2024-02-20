function GifSearch({handleSearch,searchTerm}){
    
    return (
        <div>
            <form>
                <label>Enter a Search Term:<br/>
                <input type="text" name="gif" id="gif"
                 value={searchTerm}
                />   
                </label><br/> 
                
                <button  onClick={handleSearch}>Find Gifs</button>
            </form>
            
        </div>
    )
}

export default GifSearch;