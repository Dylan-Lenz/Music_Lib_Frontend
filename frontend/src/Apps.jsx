import React, { useState, useEffect } from 'react';
import MusicTable from './components/MusicTable/MusicTable';
import CreateSong from './components/CreateSong/CreateSong';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs();
    addNewSong();
  }, []);

  async function getAllSongs(){
    const getSongs = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(getSongs.data)
  }

  async function addNewSong(newSong){
    const tempSong = await axios.post('http://127.0.0.1:8000/music/', newSong);
    setSongs(tempSong)
  }

  return (
    <body style={{backgroundImage: `url(https://www.comstocksmag.com/sites/main/files/imagecache/lightbox/main-images/0417_blog_lead_ss.jpg)`}}>
      <MusicTable parentSongs={songs}/>
      <CreateSong addNewSongProp={addNewSong}/>
    </body>
  );
}

export default App;