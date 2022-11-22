import React, { useState } from 'react';


export default function SearchBar(props, event) {
    const [searchTerm, setSearchTerm] = useState ([]) 

        <input
            type="text" 
            placeholder="Filter Library Results"
            onChange={(event) => {
            setSearchTerm(event.target.value)
            }}
        />
}

    