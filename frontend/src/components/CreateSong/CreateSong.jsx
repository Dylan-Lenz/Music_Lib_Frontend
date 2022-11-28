import React, { useState } from 'react';
import styled from 'styled-components'; 

const CreateSong = (props) =>{

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');

        function handleSubmit(event) {
            let newSong = {
                title: title,
                album: album,
                artist: artist,
                genre: genre,
                release_date: release_date,
            };
            props.addNewSongProp(newSong);
        }

        return (
            <div>
                <H1>ADD TO LIBRARY</H1>
                    <FORM onSubmit={handleSubmit}>
                        <div>
                            <LABEL>Title</LABEL>
                            <INPUT type='string' value={title} onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <div>
                            <LABEL>Album</LABEL>
                            <INPUT type='string' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                        </div>
                        <div>
                            <LABEL>Artist</LABEL>
                            <INPUT type='string' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                        </div>
                        <div>
                            <LABEL>Genre</LABEL>
                            <INPUT type='string' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                        </div>
                        <div>
                            <LABEL>Release Date</LABEL>
                            <INPUT type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                        </div>
                        <div>
                            <Button type='submit'>Add a Song</Button>
                        </div>
                    </FORM>
            </div> 
            
        )
}
  
export default CreateSong;

//styling...

    const H1 = styled.h1 `
        align-items: center;
        font-size: 2.5em;
        text-align: center;
        color: #F5B260;
        background: #121114;
        border-radius: .5px;
        padding: .5px;
        border-radius: 7px;
    `;

    const FORM = styled.form `
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
        align-items: flex-end;
    `;

    const INPUT = styled.input `
        background: #121114;
        color: #F5B260;
        border-radius: 5px;
        border-color: #F9F871;
        padding: 5px;
        margin: 2.5px;
    `;

    const LABEL = styled.label `
        color: #F5B260;
        background: #121114;
        border-radius: 3.5px;
        padding: 5px;
    `;

    const Button = styled.button`
        background: #121114;
        color: #F9F871;
        border-radius: 14px;
        padding: 5px;
        margin: 5px;
        margin-bottom: 175px;
        :disabled {
            opacity: 0.4;
        }
        :hover {
            box-shadow: 0 0 10px yellow;
        }
    `;

   