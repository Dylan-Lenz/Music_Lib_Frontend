import React, { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='string' value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label>Album</label>
                    <input type='string' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                </div>
                <div>
                    <label>Artist</label>
                    <input type='string' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                </div>
                <div>
                    <label>Genre</label>
                    <input type='string' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                </div>
                <div>
                    <label>Release Date</label>
                    <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Add a Song</button>
                </div>
            </form>
        )
}
 
export default CreateSong;