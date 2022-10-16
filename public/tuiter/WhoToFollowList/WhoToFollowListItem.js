
const WhoToFollowListItem = (who) => {
    return(`
                <l1 class="list-group-item">
                    <div class="row">
                    <div class="col-2" ><img class="float-start rounded wd-java" src="../../images/${who.avatarIcon}" height="50px"></div>
                        <div class="col-5  " ><div class="fw-bolder">${who.userName} <i class="fas fa-circle"></i></div><div>@${who.handle}</div></div>
                    <div class="col-5 "><button type="button" class="float-end btn btn-primary w=50 mt-1  rounded-pill">Follow</button></div>
                    </div>
                </l1>
 `);
}

export default WhoToFollowListItem;