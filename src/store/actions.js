import { createAction } from "@reduxjs/toolkit";
//5
/* 
  the createAction() is an action creator and it has a type
  of app/reset. we created this reset action so that the
  moviesSlice's and songsSlice's combined reducers can watch
  for the app/reset action type. 
  
  Also, we're using this so that both the moviesSlice and songsSlice
  depend on this acion instead of one of them depending on the
  other like previously when we were watching for a reset update
  in the moviesSlice from the songsSlice and the songsSlice depended
  on the moviesSlice.
*/
export const reset = createAction("app/reset");
