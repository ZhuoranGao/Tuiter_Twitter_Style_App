import PostList from "./PostList.js";
import PostItem from "./postitem.js";

const Postmistress = () => {
    return(`   

                    ${
        PostList.map(PostList => {
            return(PostItem(PostList));
        }).join('')
    }
        
 `);
}

export default Postmistress;