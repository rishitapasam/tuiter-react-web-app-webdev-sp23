import React from "react";
import {useDispatch} from "react-redux";
import tuits from './tuits.json';
//import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

import {updateTuitThunk} from "../../services/tuits-thunks";
//import tuit from "../tuits/tuits-reducer";
import { faCheckCircle, faComment, faRectangleTimes, faVcard, faHeart,   } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
library.add( faSolidHeart);


const TuitItem = (
 {
   tuit = {
//     "avatarIcon": "elonm.jpg",
//              "userName": "Elon Musk",
//              "handle": "@elonmusk",
//              "time": "23h",
//              "title": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
//              "comments":"4.2k",
//              "retuits":"3.5k",
//              "likes":"37.5k",
//               "liked":false,

   }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}

 return(
  <ul>
     <li className="list-group-item">
        <div className="row">
         <div className="col-1 ps-0 ">
              <img className="float-left float-start rounded-circle" src={`/images/${tuit.image}`} height = "45px" width="45px"/>

         </div>

         <div className="col-11">
         <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div className="text-black fw-bold">{tuit.username}<i className="text-primary bi bi-check-circle-fill"/> <span className="text-muted"> {tuit.handle} . {tuit.time} </span> </div>

            <div className="text-black">{tuit.title}</div>
            <div className="text-black">{tuit.tuit}</div>






                  <div className="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
                  <ul className="nav   align-items-center nav-justified">
                              <li className="nav-item">
                                <a className="nav-link text-muted" href="#"><FontAwesomeIcon icon={faComment} />{tuit.comments}</a>
                              </li>
                              <li className="nav-item">

                                          <a className="nav-link text-muted" href="#"><i className="bi bi-arrow-repeat text-muted"></i> {tuit.retuits}</a>

                                        </li>
                              <li className="nav-item">
                                        <i  className="text-decoration-none text-secondary small">
                                                  { tuit.liked && <FontAwesomeIcon icon={faSolidHeart}
                                                                                   className="pe-2 text-danger fa-1x"
                                                                                   onClick={() =>dispatch(updateTuitThunk({
                                                                                    ...tuit,
                                                                                        liked: false,
                                                                                        likes: tuit.likes - 1}))}/> }
                                                  { !tuit.liked && <i className="bi bi-heart text-muted"

                                                                                    onClick={() =>dispatch(updateTuitThunk({
                                                                                      ...tuit,
                                                                                        liked: true,
                                                                                        likes: tuit.likes + 1}))} />}
                                                  {tuit.likes}
                                        </i>
                              </li>

                              <li className="nav-item">
                                        <div className=" text-decoration-none text-secondary">
                                              <i  className="text-decoration-none text-secondary small">
                                                  { tuit.disliked && <i className="bi bi-hand-thumbs-down-fill "
                                                                        onClick={() => dispatch(updateTuitThunk({
                                                                                        ...tuit,
                                                                                        disliked: false,
                                                                                        dislikes: tuit.dislikes - 1}))}/> }
                                                  { !tuit.disliked && <i className="bi bi-hand-thumbs-down"
                                                                                    onClick={() => dispatch(updateTuitThunk({
                                                                                        ...tuit,
                                                                                        disliked: true,
                                                                                        dislikes: tuit.dislikes + 1}))}/> }
                                                  {tuit.dislikes}
                                              </i>
                                          </div>

                              </li>

                              <li className="nav-item">
                                          <a className="nav-link  "href=" #"><i className="bi bi-upload text-muted"></i></a>
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