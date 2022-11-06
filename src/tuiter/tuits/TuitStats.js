// export default Index;
import React from "react";
// import "../../vendors/bootstrap/css/bootstrap.min.css";
// import "../../vendors/bootswatch/bootstrap.min.css";
import "./index.css"
import TuitItem from "./TuitItem";
import './tuits.json';
const TuitStats = ({tuit={"replies": "22",
    "retuits": "9",
    "likes": "37",
"liked":true}})=> {
    return(
        <div className="row " style={{position: "relative", paddingTop: "40px"}}>
            <div className="flex-container border-white">
                <a href="# " style={{textDecoration: "none"}}>
                    <i className="fa-regular fa-comment"
                       style={{color:"rgb(110, 118, 125)"}}></i>
                    <span
                        style={{color: "rgb(110, 118, 125)", paddingLeft: "8px"}}>{tuit.replies}</span>
                </a>
                <a href="# " style={{textDecoration: "none"}}>
                    <i className="fa-sharp fa-solid fa-retweet"
                       style={{color:"rgb(110, 118, 125)"}}></i>
                    <span
                        style={{color: "rgb(110, 118, 125)",paddingLeft: "8p"}}> {tuit.retuits}</span>
                </a>
                <a href="# " style={{textDecoration: "none"}}>




                    {tuit.liked&&<><i className="fa-solid fa-heart" style={{color: "red"}}>
                        <div
                            style={{color: "rgb(110, 118, 125)", paddingLeft: "12px",paddingTop: "-100px"}}></div>
                    </i>
                        <span
                        style={{color: "red",paddingLeft: "8px"}}>{tuit.likes}</span></>}

                    {!tuit.liked&&<><i className="fa-solid fa-heart" style={{color: "rgb(110, 118, 125"}}>
                        <div
                            style={{color: "rgb(110, 118, 125)", paddingLeft: "12px",paddingTop: "-100px"}}></div>
                    </i>
                    <span
                        style={{color: "rgb(110, 118, 125)",paddingLeft: "8px"}}>{tuit.likes}</span></>}




                </a>




                <a href="# " style={{textDecoration: "none"}}>
                    <i className="fa-solid fa-arrow-up-from-bracket"
                       style={{color:"rgb(110, 118, 125)"}}></i>

                </a>

            </div>
        </div>
        );

};

export default TuitStats;