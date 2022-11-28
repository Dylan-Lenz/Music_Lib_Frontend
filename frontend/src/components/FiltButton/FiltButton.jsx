import * as React from 'react';
import styled from 'styled-components';


export default function FiltButton(props) {
  
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
  
    const handleTitle = (value, event) => {
        setOpen(false);
        event.preventDefault();
        return value
    };

    const handleAlbum = (event, value) => {
        setOpen(false);
        event.preventDefault();
        return value
    };

    const handleArtist = (event, value) => {
        setOpen(false);
        event.preventDefault();
        return props.termProp(value)
    };

    const handleGenre = (event, value) => {
        setOpen(false);
        event.preventDefault();
        return value
    };

    return (
        <Div>
            <Button onClick={handleOpen}>Filter</Button>
                {open ? (
                    <Ul>
                        <Li>
                            <Buttons value = {'title'} onClick={(event) => handleTitle(event.target.value)}>Title</Buttons>
                        </Li>
                        <Li>
                            <Buttons value={'album'} onClick={(event) => handleAlbum(event.target.value)}>Album</Buttons>
                        </Li>
                        <Li>
                            <Buttons value={'artist'} onClick={(event) => handleArtist(event.target.value)}>Artist</Buttons>
                        </Li>
                        <Li>
                            <Buttons value={'genre'} onClick={(event) => handleGenre(event.target.value)}>Genre</Buttons>
                        </Li>
                    </Ul>
                ) : null}
            {open ? '' : ''}
        </Div>
    );
};

//styling...

 
const Div = styled.div `
    position: relative;
`;

const Button = styled.button`
    color: #F9F871;
    background: #121114;
    border-radius: 14px;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    :disabled {
        opacity: 0.4;
    }
    :hover {
        box-shadow: 0 0 10px #F9F871;
    }
    `;

const Ul = styled.ul `
    position: absolute;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    border: 1px solid grey;
    width: 150px;
`;

const Li = styled.li `
    margin: 0;
    background-color: #121114;
`;

const Buttons = styled.button `
    width: 100%;
    height: 100%;
    text-align: left;
    background: none;
    color: #F5B260;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
    :hover {
        background-color: #2E3138;
    }
`;