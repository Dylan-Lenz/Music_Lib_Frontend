import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/CreateSong/CreateSong';




function App() {
  return (
    <main style={{backgroundImage: `url(https://www.comstocksmag.com/sites/main/files/imagecache/lightbox/main-images/0417_blog_lead_ss.jpg)`}}>
      <body>
      <div>SearchBar</div>
        <div>
          <MusicTable/>
          <AddSong/>
        </div>
      </body>
    </main>
  );
}
export default App;

