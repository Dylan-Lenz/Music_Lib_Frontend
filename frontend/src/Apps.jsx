import React, { useState } from 'react';
import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/CreateSong/CreateSong';
import SearchBar from './components/SearchBar/SearchBar';




function App() {

  const [songs, setSongs] = useState(
    [{
    title: 'testTitle',
    album: 'testAlbum',
    artist: 'testArtist',
    genre: 'testGenre',
    release_date: '12-12-2012',
    }]
  )

  function addNewSong(song){
    let tempSongs = [song, ...songs];
    setSongs(tempSongs);
  }

  return (
    <main style={{backgroundImage: `url(https://www.comstocksmag.com/sites/main/files/imagecache/lightbox/main-images/0417_blog_lead_ss.jpg)`}}>
      <body>
      <div><SearchBar/></div>
        <div>
          <MusicTable parentSongs={songs}/>
          <AddSong addNewSongProp={addNewSong}/>
        </div>
      </body>
    </main>
  );
}

export default App;