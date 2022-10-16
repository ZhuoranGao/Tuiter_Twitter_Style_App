
const PostItem = (PostList) => {
    return(`

   <div class="row border border-success p-2 mb-0 border-opacity-25" > 
   <div class="col-1 "><img class=wd-roundImage  src=${PostList.image1} ></div>
   
   <div class="col-10 ">
   
   
   <div class="row">
   <div class="wd-author" >${PostList.author} <i class="fa-solid fa-circle-check"></i><i class="fa-solid fa-ellipsis" style="color: rgb(110,118,125);float:right;"></i><span style="font-size: 13px;color:rgb(110, 118, 125);">&nbsp@${PostList.holder}・${PostList.time}</span></div>
   <div class="wd-author" >${PostList.content} </div>
   </div>
   
   
   
   
   <div class="row " >
   <div class="col border rounded border-light" >
   <div class="row "><img  src=${PostList.image2}  style="border-radius:15px; width: 555px;height: 264px;"></div>
   
   
   <div class="row border border-light">
   <div class="wd-author" >${PostList.content2}</div>
   <div class="wd-author" style="color: rgb(110,118,125)" >${PostList.content3}</div>
   </div>
</div>
   </div>
   
   




<div class="row " style="position: relative; padding-top: 40px;">
<div class=flex-container  >
    <a href="# " style="text-decoration: none;">
        <i class="fa-regular fa-comment" style="color:rgb(110, 118, 125);"></i>
        <span style="color: rgb(110, 118, 125);padding-left: 8px;">${PostList.icon1}</span>
    </a>
    <a href="# " style="text-decoration: none;">
        <i class="fa-sharp fa-solid fa-retweet" style="color:rgb(110, 118, 125);"></i>
        <span style="color: rgb(110, 118, 125);padding-left: 8px;">${PostList.icon2}</span>
    </a>
    <a href="# " style="text-decoration: none;">
        <i class="fa-solid fa-heart" style="color: rgb(110, 118, 125);"><div style="color: rgb(110, 118, 125); padding-left: 12px;padding-top: -100px;"></div></i>
        <span style="color: rgb(110, 118, 125);padding-left: 8px;">${PostList.icon3}</span>
    </a>
    <a href="# " style="text-decoration: none;">
        <i class="fa-solid fa-arrow-up-from-bracket" style="color:rgb(110, 118, 125);"></i>

    </a>

</div>
</div>



</div>


</div>





 `);
}

export default PostItem;