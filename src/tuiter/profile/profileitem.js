import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import PostSummaryList from "../post-summary-list";
import "../../vendors/fontawesome6.2/css/all.css";
import profile from './profiles.json';
import {deleteTuit} from "../tuits/tuits-reducer";
import {dispatch} from "react-redux";
import{updateProfile}from "./profile-reducer"
const ProfileItem = ({profile}) => {
    // const profile = useSelector(
    //     (state) => state.profile);

    const dispatch = useDispatch();
const [profileBeingEdited, setProfileBeingEdited]=useState(null)
    // const [profileBeingEdited, setProfileBeingEdited]=useState(null)
    const updateProfileHandler=(profile,newProfileText)=>{

        dispatch(updateProfile({...profile,
                               profile:newProfileText}))
    }



    return(

        <div className="card mx-auto" style={{width: "41rem"}}>
            <div className="row">


                {
                    profile!==profileBeingEdited &&<>
                               <div className="col-1">
                                   <i className="fas fa-arrow-left m-3"></i>
                               </div>
                               <div className="col-7 m-1 ">
                                   <span className="h4">{profile.firstName } {profile.lastName}</span>
                                   <div className="text-secondary">{profile.numOfTweets}Tweets</div>
                               </div>

                           </>
                }
                {
                    profile===profileBeingEdited && <>
                               <div className="col-1">
                                   <i className="fa-solid fa-delete-left m-3 h4"></i>
                               </div>
                               <div className="col-10 m-2 ">
                                   <strong className="h4">Edit profile</strong>


                                   <button onClick={()=>setProfileBeingEdited(null)} className="rounded-pill btn btn-light btn-outline-dark float-end  fw-bold"

                                           style={{width: "150px",height: "40px", position:"relative", left:"20px"}}>
                                       Save
                                   </button>


                               </div>

                           </>
                }


            </div>


            <img src={profile.image1}
                 style={{width: "650px",height: "300px"}}/>
            <div >
            <img src={profile.profilePicture}
                 className="rounded-circle border border-white" style={{width: "150px",height: "150px",position:"relative", top:"-50px"}}/>


{/*editbutton*/}
                {
                    profile!==profileBeingEdited &&<>                <button onClick={()=>setProfileBeingEdited(profile)} className="mt-2  rounded-pill btn btn-light btn-outline-dark float-end  fw-bold"

                                                                             style={{width: "150px",height: "40px",marginRight:"20px"}}>
                               Edit
                           </button></>
                }


{/*editbutton*/}


            </div>



            <div className="card-body " style={{position:"relative", top:"-50px"}}>
                {/*<h5 className="card-title"></h5>*/}
                <p className="card-text">

{/*edit*/}
                    {
                        profile!==profileBeingEdited &&<><span className="h4">{profile.firstName} {profile.lastName}</span>
                        <div className="text-secondary">{profile.handle}</div></>
                    }
                    {
                        profile===profileBeingEdited && <input type="text" value={profile.name}></input>
                    }

      {/*edit              */}


                    <br/>


                    {
                        profile!==profileBeingEdited &&
                        <>
                            <div >{profile.bio}</div>
                            <span className="text-secondary h6">
                        <div className="d-flex justify-content-between">

                        <span><i className="fas fa-location"></i>  {profile.location}</span>
                        <span><i className="fas fa-birthday-cake"></i>  {profile.dateOfBirth}</span>
                        <span><i className="fas fa-calendar-alt"></i>  Joined {profile.dateJoined}</span>
                            <br/>
                        </div>
                    </span>


                        <div>
                        <span ><strong>{profile.followingCount}</strong> <span className="text-secondary"> Following     </span>     </span>
                        <span ><strong>{profile.followersCount}</strong> <span className="text-secondary"> Follower</span></span>
                        </div>
                        </>
                    }
                    {
                        profile===profileBeingEdited &&
                        <>
                            <textarea  rows="2" cols="70" value={profile.bio}></textarea>
                            <textarea  rows="2" cols="70" onchange={(e)=>updateProfileHandler(profile,e.target.value)} value={profile.location}></textarea>
                        <textarea  rows="2" cols="70" placeholder="website"></textarea>
                            <div className="text-secondary">Birth date • <span className="text-primary">edit</span></div>
                            <div className="text-secondary">{profile.dateOfBirth}</div>
                            <div>Switch to professional<i className="fa-solid fa-arrow-right float-end"></i></div>
                        </>
                    }
                </p>

            </div>
        </div>






    );



};
export default ProfileItem;