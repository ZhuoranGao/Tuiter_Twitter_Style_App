import React , {useEffect}from "react";
// import postsArray from './posts.json';
import {useDispatch, useSelector} from "react-redux";
import tuit from './tuits.json'
import TuitItem
    from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import TuitStats from "./TuitStats";


const Index = () => {
    // const tuitsArray = useSelector(state => state.tuits)


    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])



    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            {
                tuits.map(tuit =>
                                   <TuitItem
                                       key={tuit._id} tuit={tuit}/> )
            }


        </ul>
    );
};
export default Index;