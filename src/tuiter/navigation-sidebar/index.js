import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <a className="list-group-item"><i className="fab fa-twitter"></i>Tuiter</a>
     <Link to="/tuiter/home"  className={`list-group-item
                    ${active === 'home'?'active':''}`}><i class="fas fa-home"></i>
       Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}><i class="fas fa-hashtag"></i>
       Explore
     </Link>
     <Link to="/" className="list-group-item"><i class="fas fa-ellipsis-h"></i>
            Labs
          </Link>

     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}><i class="fas fa-bell"></i>
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}><i class="fas fa-envelope"></i>
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}><i class="fas fa-bookmark"></i>
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}><i class="fas fa-list"></i>
       Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}><i class="fas fa-user"></i>
       Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}><i class="fas fa-ellipsis-h"></i>
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;


