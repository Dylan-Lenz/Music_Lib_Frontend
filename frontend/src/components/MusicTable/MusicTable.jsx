import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FiltButton from '../FiltButton/FiltButton';
import styled from 'styled-components';


export default function MusicTable(props) {

    const [search, setSearch] = useState('');
    const [term, setTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState([]);
    
    const SearchTerm = () => {
        return (
            term === 'title' ? setSearchTerm(props.parentSongs.filter((song) => {
                song.title.toLowerCase().includes(search)})) 

            : term === 'album' ? setSearchTerm(props.parentSongs.filter((song) => {
                song.album.toLowerCase().includes(search)}))

            : term === 'artist' ? setSearchTerm(props.parentSongs.filter((song) => {
                song.artist.toLowerCase().includes(search)}))
            
            : term === 'genre' ? setSearchTerm(props.parentSongs.filter((song) => {
                song.genre.toLowerCase().includes(search)}))
            
            : setSearchTerm(props.parentSongs)
        );
    }
    
    return (
        <div>
            <SPAN>
                <FiltButton termProp={setTerm}  />
                <SearchBar searchProp={setSearch} />
                <SearchTerm/>
            </SPAN>
            <DIV>
                <H1>MUSIC LIBRARY</H1>
                    <table>
                        <thead>
                            <TR>
                                <TH>Title</TH>
                                <TH>Album</TH>
                                <TH>Artist</TH>
                                <TH>Genre</TH>
                                <TH>Release Date</TH>
                            </TR>
                        </thead>
                        <tbody>
                            {searchTerm.map((song, index) => {
                                return (
                                    <Tr key={index}>
                                        <TD>{song.title}</TD>
                                        <TD>{song.album}</TD>
                                        <TD>{song.artist}</TD>
                                        <TD>{song.genre}</TD>
                                        <TD>{song.release_date}</TD>
                                    </Tr>
                                ); 
                            })}
                        </tbody>
                    </table>
            </DIV>
        </div>
    )
}


//styling...

const SPAN = styled.span `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
`;

const H1 = styled.h1 `
align-items: center;
padding: 0em;
font-size: 5em;
text-align: center;
color: #F5B260;
background: #121114;
border-radius: .5px;
padding: .5px;
border-radius: 7px;
`;

const TR = styled.tr`
padding: 1em;
background: #121114;
`;

const TH = styled.th`
font-size: 1.25em;
text-align: center;
color: #F5B260;
`;

const DIV = styled.div `
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-content: center;
justify-content: flex-end;
align-items: center;
`;

const TD = styled.td`
  padding: .5em;
  color: #48545E;
  text-align: center;
`;

const Tr = styled.tr`
  padding: 1em;
  background: #A4D0C3;
  width: 100%;
`;