import React from "react";
// import postsArray from './posts.json';
import {useSelector} from "react-redux";
import tuit from './tuits.json'
import TuitItem
    from "./TuitItem";
import TuitStats from "./TuitStats";


const Index = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                                   <TuitItem
                                       key={tuit._id} tuit={tuit}/> )
            }


        </ul>
    );
};
export default Index;