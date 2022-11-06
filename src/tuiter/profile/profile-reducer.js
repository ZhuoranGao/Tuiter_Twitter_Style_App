import {createSlice} from "@reduxjs/toolkit";
import profiles from "./profiles.json"
const initialProfile = [
    {
        firstName: "Jose", lastName: "Annunziato", handle: "@jannunzi",
        profilePicture: "jose.png", 	bannerPicture: "polyglot.png",
        bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
        website: "youtube.com/webdevtv",
        location: "Boston, MA",	dateOfBirth: "7/7/1968",	dateJoined: "4/2009",
        followingCount: 340,	followersCount: 223,"numOfTweets": "6,114",image1: "../../images/image2.jpg",name: "Jose Annunziato"
    }
];

const profileSlice = createSlice({
                                     name: 'profiles',
                                     initialState:profiles,
                                     reducers: {

                                         updateProfile(state,action){
                                              //  const profileIndex=state.name.findIndex((profile)=>profile._id===action.payload._id)
                                              // state[profileIndex].profile=action.payload.profile
                                             // console.log(state[profileIndex].profile)

                                             // state.name = action.payload.name;
                                             //
                                             // state.location = action.payload.location;
                                             // state.bio = action.payload.bio;
                                             // state.dateOfBirth = action.payload.dateOfBirth;
                                             // state = action.payload;

                                                 state.name = action.payload.name;
                                                 state.handle = action.payload.handle;
                                                 state.bio = action.payload.bio;
                                                 state.website = action.payload.website;
                                                 state.location = action.payload.location;
                                                 state.dateOfBirth = action.payload.dateOfBirth

                                         },

                                     }
                                 });
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;