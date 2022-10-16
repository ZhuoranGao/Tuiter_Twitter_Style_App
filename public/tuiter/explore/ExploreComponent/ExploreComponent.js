import PostSummaryList from "../../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-10">
                    <div class="position-relative">
                        <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
                        <span class="position-absolute wd-magni ">🔍</span>
                    </div>
                </div>
                <div class="col">
                    <i class="fa fa-cog fa-2x text-primary wd-gear"></i>

                </div>
                       
                       
                       
                       
                       
                       
                       
                       
                       
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active " href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" tabindex="-1">Sports</a>
                </li>

                <li class="nav-item d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link " href="#" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
                       <div class="position-relative">
            <img src="../../images/starship.jpg" width="100%">
            <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>
           
           
          ${PostSummaryList()}
    `);
}
export default ExploreComponent;
