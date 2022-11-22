import React, { useState } from 'react';




export default function MusicTable(props) {

    const [search, setSearch] = useState('')
    

    return (
        <body>
            <input
                type="text" 
                placeholder="Search by Title"
                onChange={(event) => {
                setSearch(event.target.value)
            }}/>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                {props.parentSongs.filter((song) => {
                    return search.toLowerCase() === '' ? song : song.title.toLowerCase()
                    .includes(search)}).map((song, index) => {
                    return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </body>
    )
}