import React from "react";


const SearchBox=({searchChange})=>{
    return(
        <div className="tc pa2 ma2  ">
            <input onChange={searchChange} className="bg-dark-blue shadow-5 pa3 br4" type='search' placeholder="search bots"/>
        </div>
    );



    
}
export default SearchBox;