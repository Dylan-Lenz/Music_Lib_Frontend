import React from 'react';




    


export default function SearchBar(props) {
   
   
    return (
        <div className='SearchBar'>
            <input
                type="text" 
                placeholder="Search by Title"
                onChange={(event) => {
                props.parentSearch(event.target.value)
            }}/>
        </div>
    )
}