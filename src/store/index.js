import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
//1
/* 
  eveything else in our project like components, etc. will
  use this file as the central entrance point to access everything
  related to redux and the store in our project. that;s why we're 
  importing everything we need and exporting everything all the
  other parts of the application need.

  this type of function based folder/file organization is better
  for redux toolkit because of circular imports, which is an issue
  we don't really have in this project, but we're just future proofing.
*/

/* 
  the keys of the store are set when the store 
  (like songs and movies) is initially created. the values of
  the peoperty keys inside the store are being produced by the
  different reducers you might have loaded into your store. the
  keys will always stay the same, the values will change.

  this is what resulted in our initial state looking like {songs: []}:
  reducer: { songs: songs.reducer }. the songs key's value is
  produced by the songsReducer, which is a reducer that's dedicated
  to maintaing the songs' value array.

  songsReducer (songsSlice.reducer) is the combined reducer that
  handles the songs piece of state. it receives actions and forwards
  them along to the approperiate "mini reducer" defined in the reducers
  object in the songsSlice based on the action type.
*/
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

/* 
  #
  the object inside the dispatch() function in the code below
  is called an action object:

  store.dispatch({
    type: "song/addSong",
    payload: "new song!"
  });
  #
 
  #
  the action in this dispatch function is created via an action
  creator that's created by slices automatically. they're used
  so that we don't have to type out and memorize all the code
  above every time we want to dispatch an action. acrion creators
  are used in plain redux too and they're put in a seperate actions
  file.

  store.dispatch(songsSlice.actions.addSong("some song payload!"));
  #
*/
