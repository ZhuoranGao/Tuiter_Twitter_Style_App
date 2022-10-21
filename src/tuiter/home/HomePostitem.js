import React from "react";
// import "../../vendors/bootstrap/css/bootstrap.min.css";
// import "../../vendors/bootswatch/bootstrap.min.css";
const HomePostitem = ({home={"image1": "../../images/1.jpg",
    "author": "Elon Musk",
    "holder": "muskmelon",
    "time": "23h",
    "content": "Amazing show about @Inspiration4x mission",
    "image2": "../../images/1.jpg",
    "content2":"Absolutely no code generation and no requirement for XML configuration",
    "content3":"Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.Most Spring Boot applications need minimal Spring configuration.",
    "icon1": "22",
    "icon2": "9",
    "icon3": "37"}})  => {
    return(








        <div className="row border border-success p-2 mb-0 border-opacity-25">
            <div className="col-1 "><img className="wd-roundImage" src={home.image1}/></div>


            <div className="col-10 ">


                <div className="row">
                    <div className="wd-author">{home.author} <i
                        className="fa-solid fa-circle-check"></i><i className="fa-solid fa-ellipsis"
                                                                    style= {{color :"rgb(110,118,125)", float: 'right'}}></i><span
                        style={{fontSize: "13px",color:"rgb(110, 118, 125)"}}>@{home.holder}・{home.time}</span>
                    </div>
                    <div className="wd-author">{home.content} </div>
                </div>


                <div className="row ">
                    <div className="col border rounded border-light">
                        <div className="row "><img src={home.image2}
                                                   style={{borderRadius:"15px", width: "555px",height: "264px"}}/>
                        </div>


                        <div className="row border border-light">
                            <div className="wd-author">{home.content2}</div>
                            <div className="wd-author"
                                 style={{color: "rgb(110,118,125)"}}>{home.content3}</div>
                        </div>
                    </div>
                </div>


                <div className="row " style={{position: "relative", paddingTop: "40px"}}>
                    <div className="flex-container">
                        <a href="# " style={{textDecoration: "none"}}>
                            <i className="fa-regular fa-comment"
                               style={{color:"rgb(110, 118, 125)"}}></i>
                            <span
                                style={{color: "rgb(110, 118, 125)", paddingLeft: "8px"}}>{home.icon1}</span>
                        </a>
                        <a href="# " style={{textDecoration: "none"}}>
                            <i className="fa-sharp fa-solid fa-retweet"
                               style={{color:"rgb(110, 118, 125)"}}></i>
                            <span
                                style={{color: "rgb(110, 118, 125)",paddingLeft: "8p"}}>{home.icon2}</span>
                        </a>
                        <a href="# " style={{textDecoration: "none"}}>
                            <i className="fa-solid fa-heart" style={{color: "rgb(110, 118, 125)"}}>
                                <div
                                    style={{color: "rgb(110, 118, 125)", paddingLeft: "12px",paddingTop: "-100px"}}></div>
                            </i>
                            <span
                                style={{color: "rgb(110, 118, 125)",paddingLeft: "8px"}}>{home.icon3}</span>
                        </a>
                        <a href="# " style={{textDecoration: "none"}}>
                            <i className="fa-solid fa-arrow-up-from-bracket"
                               style={{color:"rgb(110, 118, 125)"}}></i>

                        </a>

                    </div>
                </div>


            </div>


        </div>




 );
};

export default HomePostitem;