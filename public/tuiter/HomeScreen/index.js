/*eslint-env jquery*/
import NavigationSidebar from "../NavigationSidebar/index.js";

import PostSummaryList from "../PostSummaryList/index.js";
import Postmistress from "../PostList/index.js";

function homeComponent() {
    $('#wd-home').append(`
       
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
<!--    <h3>NavigationSidebar</h3>-->
    
    ${NavigationSidebar("home")}
   </div>
   
   
   
   
   
   <div class="col-10 col-lg-7 col-xl-6 ">
<!--   <div class="row"> -->
<!--   <div class="col-1 "><img class=wd-roundImage  src="../../images/1.jpg" ></div>-->
<!--   -->
<!--   <div class="col-10 ">-->
<!--   -->
<!--   -->
<!--   <div class="row">-->
<!--   <div class="wd-author" >Robert Zubrin<i class="fa-solid fa-ellipsis" style="color: rgb(110,118,125);float:right;"></i><span style="font-size: 13px;color:rgb(110, 118, 125);">&nbsp@robert_zubrin・Jul 31</span></div>-->
<!--   <div class="wd-author" >React.js is a component based front end library that </div>-->
<!--   </div>-->
<!--   -->
<!--   -->
<!--   -->
<!--   -->
<!--   <div class="row " >-->
<!--   <div class="col" style="border-radius:25px 25px 0 0;border-style: solid;border-color: rgb(47, 51, 54);border-width: 1px;">-->
<!--   <div class="row "><img src="../../images/1.jpg" style="width: 550px;height: 264px;border-radius:25px 25px 0 0;border-style: solid;border-color: rgb(47, 51, 54);border-width: 1px;"></div>-->
<!--   -->
<!--   -->
<!--   <div class="row "><div class="wd-author" >Robert Zubrin</div>-->
<!--   <div class="wd-author" style="color: rgb(110,118,125)" >If you're looking for-->
<!--    random paragraphs, you've come to the right place. When a random word or a random -->
<!--    sentence isn't quite enough,-->
<!--    the next logical step is to find a random paragrap </div>-->
<!--   -->
<!--   </div>-->
<!--   -->
<!--   -->
<!--</div>-->
<!--   </div>-->
<!--   </div>-->
<!--   </div>-->
   
   
   
   ${Postmistress()}
   
   </div>
   

   
   
   
   
   
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
    
    ${PostSummaryList()}
   </div>
  
   `);
}
$(homeComponent);