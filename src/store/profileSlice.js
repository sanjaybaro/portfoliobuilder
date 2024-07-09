import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  location: "",
  profession: "",
  bio: "",
  backgroundImage: "",
  profileImage: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    loadProfile: (state) => {
      const savedProfile = JSON.parse(localStorage.getItem("profile"));
      if (savedProfile) {
        return savedProfile;
      }
      return state;
    },
  },
});

export const { updateProfile, loadProfile } = profileSlice.actions;
export default profileSlice.reducer;
