import React, { useState } from 'react';
import styled from 'styled-components';


export default function SearchBar({updateSearches}) {

    const [search, setSearch] = useState('');
    
    const handSub = (e) => {
        e.preventDefault();
        updateSearches(search);
    };
            
    return (
        <form onSubmit={handSub}>
            <INPUT
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.v)
            }/>
        </form>
    )
}

const INPUT = styled.input `
        background: #121114;
        color: #F5B260;
        border-radius: 14px;
        border-color: #F9F871;
        padding: 10px;
        margin: 10px;
        font-size: 16px;
    `;