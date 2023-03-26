import React from "react";
import hpostArray from './hpost.json';
import PostItem
  from "./hpostitem";
import who from "../data/who.json";


const PostList = () => {
 return(
   <ul className="list-group">
     {
       hpostArray.map(hpost =>
         <PostItem
           key={who._id} hpost={hpost}/> )
     }
   </ul>
 );
};
export default PostList;