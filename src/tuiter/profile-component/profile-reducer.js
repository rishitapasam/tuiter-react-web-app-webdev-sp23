import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    userName: "RishitaPasam",
      handle: "@rpasam",
      profilePicture: "profilepic.jpg",
      bannerPicture: "bannerpic.jpg",
      bio: "MSDS Student at Northeastern University",
      website: "youtube.com/webdevtv",
      location: "Boston, MA",
      dateOfBirth: "2/3/2000",
      dateJoined: "2/2021",
      followingCount: "340",
      followersCount: "223"
  }


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
       },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;