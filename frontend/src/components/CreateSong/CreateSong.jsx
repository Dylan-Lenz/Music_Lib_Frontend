



const AddSong = (props) => {
    return ( 
        <form>
            <div>
                <label>Title</label>
                <input type='string' />
            </div>
            <div>
                <label>Album</label>
                <input type='string' />
            </div>
            <div>
                <label>Artist</label>
                <input type='string' />
            </div>
            <div>
                <label>Genre</label>
                <input type='string' />
            </div>
            <div>
                <label>Release Date</label>
                <input type='date' />
            </div>
        </form>
     );
}
 
export default AddSong;