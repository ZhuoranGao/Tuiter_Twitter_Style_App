const NavigationSidebar = (active) => {
    return(`   
   <div class="list-group ">
                <a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">
                    <i class="fab fa-twitter "></i></a>
<!--                resize-->
<!--                <a href="#" class="  list-group-item list-group-item-action d-flex align-items-center">-->
<!--                    <i class="fas fa-home me-1 "></i>-->
<!--               -->
<!--                    <span class="d-flex d-none d-xl-block ns-1 "> Home</span>-->
<!--                    </a>-->
                   ${active==="home" ? `                <a href="#" class="  list-group-item list-group-item-action active  d-flex align-items-center">
                    <i class="fas fa-home me-1 "></i>
               
                    <span class="d-flex d-none d-xl-block ns-1 "> Home</span>
                    </a>` : `                <a href="#" class="  list-group-item list-group-item-action  d-flex align-items-center">
                    <i class="fas fa-home me-1 "></i>
               
                    <span class="d-flex d-none d-xl-block ns-1 "> Home</span>
                    </a>`}
                   
                   
                   ${active==="explore" ? `                <a href="#" class=" list-group-item active list-group-item-action  d-flex align-items-center">
                    <i class="fas fa-hashtag me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Explore</span>
                </a>`:`                <a href="#" class=" list-group-item list-group-item-action  d-flex align-items-center">
                    <i class="fas fa-hashtag me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Explore</span>
                </a>`}   
                   
                   
                   ${active==="Notifications" ? `<a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">
                    <i class="fas fa-bell me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Notifications</span>
                    </a>  `:`<a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">
                    <i class="fas fa-bell me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Notifications</span>
                    </a>`}
                   
                   
                   

                
                    
                    
                    ${active==="Messages" ? `<a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">

                    <i class="fas fa-envelope me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Messages</span>

                    </a>  `:``}
                
                    
                    
                    ${active==="Bookmarks" ? `<a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">

                    <i class="fas fa-bookmark me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Bookmarks</span>
                    </a>  `:`<a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">

                    <i class="fas fa-bookmark me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Bookmarks</span>
                    </a>`}
                
                    
                    
                    ${active==="List" ? ` <a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">


                    <i class="fas fa-list-ul me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> List</span>
                    </a> `:`<a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">


                    <i class="fas fa-list-ul me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> List</span>
                    </a>`}
                
                    
                    
                    ${active==="Profile" ? `<a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">

                    <i class="fas fa-user me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Profile</span>
                    </a>  `:`<a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">

                    <i class="fas fa-user me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> Profile</span>
                    </a>`}
                
                    
                    
                    ${active==="More" ? ` <a href="#" class=" list-group-item active list-group-item-action d-flex align-items-center">

                    <i class="fas fa-info-circle me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> More</span>
                    </a> `:`<a href="#" class=" list-group-item list-group-item-action d-flex align-items-center">

                    <i class="fas fa-info-circle me-1 "></i>
                    <span class="d-flex d-none d-xl-block ns-1 "> More</span>
                    </a>`}
                
                <button type="button" class="btn btn-primary w=50 mt-1 rounded-pill">Tweet</button>
            </div>

        
 `);
}

export default NavigationSidebar;


