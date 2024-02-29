import { createSlice } from '@reduxjs/toolkit';

const cssSlice = createSlice({
  name: 'css',
  initialState: {
    backgroundColor: 'blue', 
    borderRadius: "50%", 
    height: "4rem", 
    width:"4rem"
    // other properties...
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      state.borderRadius = action.payload;
      state.width = action.payload;
      state.height = action.payload;
    },
    // other reducers...
  },
});

export const { setBackgroundColor } = cssSlice.actions;

export const selectCss = state => state.css.backgroundColor

export default cssSlice.reducer;