import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
//2
/* 
  here we're Creating a slice, which is one of the properties
  of the overall state object in the Redux store.

  the slice name has to be unique.

  A slice is a tool that automatically generates actions, 
  action creators, and reducers for us. It creates a big reducer
  by combining all the mini reducer methods.

  Slices create action types for us. For example, to call the
  addSong() function, I can just dispatch `type: "song/addSong"`.

  The initialState defines the initial state of this slice.
  It's equivalent to providing a default value in a reducer
  function when using plain Redux, like someReducer(state = [], action).

  In a slice, we can define multiple reducers in a 'reducers' object,
  and eventually, they'll be combined into a single reducer.
  We can access this reducer using songsSlice.reducer when needed.
  Having the 'reducers' object makes it so that we don't have to
  create a big reducer function with a bunch of switch statements.
  Each individual reducing function in there, like removeSong(state, action) {},
  can be thought of as a case in a switch statement.

  the state passed in the reducer fucntions isn't the entire
  store state, it's just the piece of state managed by this 
  slice, so the songs property of the big state obeject in
  the store

  inside the addSong() function, we're pushing to the apropriate
  state all the data associated with that action type.

  the builder in the  extraReducers(builder) is how we're going
  to tell our combined reducer to watch for additional action
  types when an action is dispatched. moviesSlice.actions.reset,
  which means "movie/reset", is the action type it has to also
  watch for and the 2nd arrow function argument is another
  "mini reducer" that'll execute when that action type is detected
  by the combined reducer.
*/
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
