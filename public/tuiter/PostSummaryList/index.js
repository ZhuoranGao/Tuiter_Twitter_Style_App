// implements function PostSummaryList that renders
// the list of suggested posts at the bottom of the
// center column of the explore screen shown here on the right.

import post from './post.js'

import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`   

                    ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
        
 `);
}

export default PostSummaryList;
