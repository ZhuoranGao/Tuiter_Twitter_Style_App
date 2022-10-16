
import who from "./who.js"
import whoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <l1 class="list-group-item fw-bolder">Who to follow</l1>
           <!-- continue here -->
           
           
           
                    ${
        who.map(who => {
            return(whoToFollowListItem(who));
        }).join('')
    }
           
           
           
           </ul>
           
           
               

      

`); }
export default WhoToFollowList;