import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

import { faSnowflake, faBuilding, faNewspaper, faCircle,  faBell, faEnvelope,faBookmark,faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationSidebar = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <a className="list-group-item"><FontAwesomeIcon icon={faSnowflake} />Tuiter</a>
     <Link to="/tuiter/home"  className={`list-group-item
                    ${active === 'home'?'active':''}`}><FontAwesomeIcon icon={faBuilding} />
       Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}><FontAwesomeIcon icon={faNewspaper} />
       Explore
     </Link>
     <Link to="/" className="list-group-item"><FontAwesomeIcon icon={faCircle} />
            Labs
          </Link>

     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}><FontAwesomeIcon icon={faBell} />
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}><FontAwesomeIcon icon={faEnvelope} />
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}><FontAwesomeIcon icon={faBookmark} />
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}><FontAwesomeIcon icon={faRectangleList} />
       Lists
     </a>
     <Link to="/tuiter/profile"  className={`list-group-item
                         ${active === 'profile'?'active':''}`}><FontAwesomeIcon icon={faUser} />
           Profile
     </Link>

     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}><FontAwesomeIcon icon={faCircle} />
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;


