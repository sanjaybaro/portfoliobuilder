import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: '#FFFFFF',
  },
  reducers: {
    selectTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { selectTheme } = themeSlice.actions;
export default themeSlice.reducer;
