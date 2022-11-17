import React, {useEffect} from "react";
// import postsArray from './posts.json';
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";



const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)

    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                                   <PostSummaryItem
                                       key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;

