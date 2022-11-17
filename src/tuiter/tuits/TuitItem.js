import {useDispatch} from "react-redux";
// export default Index;
import React from "react";
import "../../vendors/bootstrap/css/bootstrap.min.css";
// import "../../vendors/bootswatch/bootstrap.min.css";
import "./index.css"
import './TuitStats'
import TuitStats from "./TuitStats";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = ({tuit})  => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }



    return(

// card
        <div className="row border border-dashed p-2 mb-0 border-opacity-25">
            <div className="col-1 "><img className="wd-roundImage" src={tuit.image}/></div>


            <div className="col-10 ">


                <div className="row">
                    <div className="wd-author">{tuit.username} <i
                        className="fa-solid fa-circle-check text-primary"></i><span
                        style={{fontSize: "13px",color:"black"}}>{tuit.handle}・{tuit.time}</span>
{/*delete*/}
                    <i onClick={() => deleteTuitHandler(tuit._id)} className="bi bi-x-lg float-end" style= {{color :"black", float: 'right'}}
                       ></i>



                    </div>
                    {/*<div className="wd-author">{tuit.content2} </div>*/}
                </div>


            {/*    <div className="row ">*/}
            {/*        <div className="col border rounded border-light">*/}
            {/*    <div className="row "><img src={tuit.image2}*/}
            {/*                               style={{borderRadius:"15px", width: "555px",height: "264px"}}/>*/}
            {/*    </div>*/}


            {/*    <div className="row border border-light">*/}
            {/*        <div className="wd-author">{tuit.content2}</div>*/}
            {/*        <div className="wd-author"*/}
            {/*             style={{color: "black"}}>{tuit.content3}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</div>*/}


                <div className="card" style={{width: "35rem"}}>
                    {/*<img src={tuit.image2}*/}
                    {/*     style={{width: "555px",height: "264px"}}/>*/}
                        <div className="card-body">
                            {/*<h5 className="card-title"></h5>*/}
                            <p className="card-text">{tuit.tuit}</p>

                        </div>
                </div>




                <TuitStats tuit={tuit}
                />



            </div>


        </div>




    );
};

export default TuitItem;