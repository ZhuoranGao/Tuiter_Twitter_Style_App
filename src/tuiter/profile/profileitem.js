import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

import "../../vendors/fontawesome6.2/css/all.css";

import{updateProfile}from "./profile-reducer"

const ProfileItem = () => {
     const profile=useSelector(state => state.profiles);
     const[FName,setFirstName]=useState(profile.firstName);
    const[Name,setName]=useState(profile.name);
    const[Bio,setBio]=useState(profile.bio);
    const[Location,setLocation]=useState(profile.location);
    const dispatch = useDispatch();
const [profileBeingEdited, setProfileBeingEdited]=useState(null)
    // const [profileBeingEdited, setProfileBeingEdited]=useState(null)
    const updateProfileHandler=(profile,newProfileText)=>{
        console.log(newProfileText)
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
                                   <span className="h4" >{profile.firstName} {profile.lastName}</span>
                                   {/*<span className="h4">{profile.firstName } {profile.lastName}</span>*/}
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

                {
                    profile!==profileBeingEdited &&<>                <button onClick={()=>setProfileBeingEdited(profile)} className="mt-2  rounded-pill btn btn-light btn-outline-dark float-end  fw-bold"

                                                                             style={{width: "150px",height: "40px",marginRight:"20px"}}>
                               Edit
                           </button></>
                }

            </div>
            <div className="card-body " style={{position:"relative", top:"-50px"}}>

                <p className="card-text">

                    {
                        profile!==profileBeingEdited &&<><span className="h4">{Name}</span>
                        <div className="text-secondary">{profile.handle}</div></>
                    }
                    {
                        profile===profileBeingEdited && <textarea title="name" type="text" onChange={(e)=>setName(e.target.value)} value={Name}></textarea>
                    }
                    <br/>
                    {
                        profile!==profileBeingEdited &&
                        <>
                            <div >{Bio}</div>
                            <span className="text-secondary h6">
                        <div className="d-flex justify-content-between">
                        <span><i className="fas fa-location" ></i>  {Location}</span>
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
                            <textarea  rows="2" cols="70" title="bio" onChange={(e)=>setBio(e.target.value)} value={Bio}></textarea>
                            <textarea  rows="2" cols="70" title="location" onChange={(e)=>setLocation(e.target.value)} value={Location}></textarea>
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