import React, { useState } from 'react';




function MusicTable(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((song, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{song.title}</td>
                                <td>{song.album}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td>{song.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default MusicTable;