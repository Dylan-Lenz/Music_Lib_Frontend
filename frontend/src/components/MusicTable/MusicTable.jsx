import React, { useState } from 'react';




function MusicTable(props) {

    const [songs, setSongs] = useState(
        [{
        title: 'testTitle',
        album: 'testAlbum',
        artist: 'testArtist',
        genre: 'testGenre',
        release_date: '12-12-2012',
        }]
    )

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
                    <tr>
                        <td>1</td>
                        <td>testTitle</td>
                        <td>testAlbum</td>
                        <td>testArtist</td>
                        <td>testGenre</td>
                        <td>12-12-2012</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default MusicTable;