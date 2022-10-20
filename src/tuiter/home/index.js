import React from "react";
import homeArray from "./homepost.json";
import HomePostitem from "./HomePostitem";
import "./index.css";


const HomePostSummeryList = () =>{

    return(

        homeArray.map(home =>
                         <HomePostitem
                             key={home._id}
                             home={home}/>

        )

)
};

export default HomePostSummeryList;