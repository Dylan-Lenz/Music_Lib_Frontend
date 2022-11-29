import * as React from 'react';
import styled from 'styled-components';


export default function FiltButton({updateTerms}) {
  
    const [open, setOpen] = React.useState(false);
    const [term, setTerm] = React.useState('');
    

    const handOpen = () => {
        setOpen(!open);
    };

    const handSub = (e) => {
        setOpen(false);
        e.preventDefault();
        updateTerms(term);
    };

    return (
        <Div>
            <Button onClick={handOpen}>Filter</Button>
                {open ? (
                    <form onSubmit={handSub}>
                        <Ul>
                            <Li>
                                <Buttons onClick={() => setTerm('title')}>Title</Buttons>
                            </Li>
                            <Li>
                                <Buttons onClick={() => setTerm('album')}>Album</Buttons>
                            </Li>
                            <Li>
                                <Buttons onClick={() => setTerm('artist')}>Artist</Buttons>
                            </Li>
                            <Li>
                                <Buttons onClick={() => setTerm('genre')}>Genre</Buttons>
                            </Li>
                        </Ul>
                    </form>
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