import React from 'react';
import './searchbox.css';
const SearchBox =({inputChange})=>{
   
    return(
        <div className='search-container'>
            <div className="foo">
                <span className="letter" data-letter="H">H</span>
                <span className="letter" data-letter="O">O</span>
                <span className="letter" data-letter="L">L</span>
                <span className="letter" data-letter="I">I</span>
                <span className="letter" data-letter="C">C</span>
                <span className="letter" data-letter="O">O</span>
                <span className="letter" data-letter="N">N</span>
            </div>
            <p className="text">Anticipate Your next holiday</p>
            <input className='search-box'
            type='text' 
            placeholder='Search Country'
            onChange={inputChange}
            />
        </div>
        
    );
    
}

export default SearchBox;