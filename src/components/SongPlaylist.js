import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  /* 
    The useDispatch() hook uses the context system to
    reach up into our component hierarchy and get access
    to the dispatch function from the redux store, therefore 
    this is the same dispatch unction that exists isnide
    our redux store.
  */
  const dispatch = useDispatch();

  /* 
    the state argument inside the useSelector() function
    referes to the entire big state object inside the store,
    but we only need the songs piece of state, therefore
    that's what we're getting.
  */
  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    /* 
      here we're updating the store state.

      addSong(payload) is an action creator. 
    */
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
