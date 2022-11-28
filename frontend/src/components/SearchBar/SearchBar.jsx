import React from 'react';
import styled from 'styled-components';


export default function SearchBar(props) {
   
    return (
        <div>
            <INPUT
                type="text" 
                placeholder="Search..."
                onChange={(event) => {props.searchProp(event.target.value)
            }}/>
        </div>
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