
const PostSummaryItem = (post) => {
    return(`
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">${post.topic}</div>
                            <div><span  class="fw-bolder">${post.userName} </span><i class="fas fa-circle"> </i><span class="text-secondary"> - ${post.time}</span></div>
                            <div class="fw-bolder">${post.title}</div>
                            <div class="text-secondary">${post.tweets}</div>
                        </div>
                        <div class="col-4"><img class="float-end" height="100px" width="100px" src=${post.image} ></div>
                    </div>
                </li></ul>
 `);
}

export default PostSummaryItem;