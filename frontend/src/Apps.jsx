import React, { useState, useEffect } from 'react';
import MusicTable from './components/MusicTable/MusicTable';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const getSongs = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(getSongs.data)
  }

  return (
    <body style={{backgroundImage: `url(https://www.comstocksmag.com/sites/main/files/imagecache/lightbox/main-images/0417_blog_lead_ss.jpg)`}}>
           <MusicTable parentSongs={songs}/>
    </body>
  );
}

export default App;