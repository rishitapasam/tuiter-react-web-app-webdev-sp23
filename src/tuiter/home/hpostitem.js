import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
const PostItem = (
 {
   hpost = {
     "avatarIcon": "elonm.jpg",
         "userName": "Elon Musk",
         "handle": "@elonmusk",
         "time": "23h",
         "title":" Amazing show about @Inspiration4x mission!",
         "image": "elonm2.jpg",
         "message":"From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space.",
         "posttitle": "Countdown: Inspiration4 Mission to Space|Netflix Official Site",
         "comments":"4.2k",
         "retuits":"3.5k",
         "likes":"37.5k"
   }
 }
) => {
 return(
  <ul>
      <div className="row">
       <div className="col-1 ps-0 ">
            <img className="float-left float-start rounded-circle" src={`/images/${hpost.avatarIcon}`} height = "45px" width="45px"/>
       </div>
       <div className="col-11">
          <div className="text-black fw-bold">{hpost.userName}<i className="fas fa-check-circle" ></i> <span className="text-muted"> {hpost.handle} . {hpost.time} </span> </div>
          <div className="text-black">{hpost.title}</div>

                <div className="mt-2 border border-secondary rounded">

                <img className=" w-100 border-bottom border-secondary rounded " src={`/images/${hpost.image}`}  height = "340px"/>
                <div className="w-100 ps-3 pt-2 pe-2 fw-bolder align-items-center text-black ">
                {hpost.posttitle}
                </div>
                <div className="mt-1 w-100 ps-3 pe-2 align-items-center">
                {hpost.message}
                </div>
                <div className="mt-1 w-100 ps-3 pb-2 pe-2 align-items-center">
                <ul className="nav   align-items-center nav-justified">
                            <li className="nav-item">
                              <a className="nav-link text-muted" href="#"><i className="fas fa-comment"></i>  {hpost.comments}</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link text-muted" href="#"><i className="fas fa-retweet"></i>  {hpost.retuits}</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link text-muted" href="#"><i className="fas fa-heart"></i> {hpost.likes}</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link text-muted" href="#" ><i className="fas fa-arrow-up"></i> </a>
                            </li>
                            </ul>
                </div>
                </div>
                <br/>



       </div>
      </div>
  </ul>
 );
};
export default PostItem;
