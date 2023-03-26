import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import tuit from "../tuits/tuits-reducer";
import { faCheckCircle, faComment, faRectangleTimes, faVcard, faHeart,   } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
library.add( faSolidHeart);

const TuitItem = (
 {
   tuits = {
     "avatarIcon": "elonm.jpg",
              "userName": "Elon Musk",
              "handle": "@elonmusk",
              "time": "23h",
              "title": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
              "comments":"4.2k",
              "retuits":"3.5k",
              "likes":"37.5k",
               "liked":false,

   }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

 return(
  <ul>
     <li className="list-group-item">
        <div className="row">
         <div className="col-1 ps-0 ">
              <img className="float-left float-start rounded-circle" src={`/images/${tuits.avatarIcon}`} height = "45px" width="45px"/>

         </div>

         <div className="col-11">
         <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(tuits._id)}></i>
            <div className="text-black fw-bold">{tuits.userName}<i className="text-primary bi bi-check-circle-fill"/> <span className="text-muted"> {tuits.handle} . {tuits.time} </span> </div>

            <div className="text-black">{tuits.title}</div>





                  <div className="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
                  <ul className="nav   align-items-center nav-justified">
                              <li className="nav-item">
                                <a className="nav-link text-muted" href="https://www.google.com"><FontAwesomeIcon icon={faComment} />  {tuits.comments}</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link text-muted" href= "https://www.google.com"><FontAwesomeIcon icon={faRectangleTimes} />

                                {tuits.retuits}</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link text-muted" href="https://www.google.com" > { tuits.liked && <FontAwesomeIcon icon={faSolidHeart} className="pe-2 text-danger fa-1x"/> }
                                                                                                               {  !tuits.liked && <i className="bi bi-heart text-muted"></i> } {tuits.likes}</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link text-muted" href="https://www.google.com" ><FontAwesomeIcon icon={faVcard} /> </a>
                              </li>
                              </ul>
                  </div>






         </div>
        </div>
     </li>
    </ul>
 );
};
export default TuitItem;