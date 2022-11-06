import React from "react";
import Profileitem from "./profileitem";
import WhatsHappening from "../home/whats-happening";
import Index from "../tuits";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import HomePostSummeryList from "../home";
import ExploreComponent from "../explore";


import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const ProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profiles);
    return(
        <>

            <Profileitem profile={profileArray}/>
            {/*<Routes>*/}

            {/*    <Profileitem profile={profileArray}/>*/}
            {/*    <Route path="edit-profile" element={<Profileitem profile={profileArray}/>}/>*/}
            {/*</Routes>*/}

        </>
    );
};
export default ProfileComponent;