import React from "react";

import {useSelector} from "react-redux";
import TuitItem
  from "./TuitItem";
import who from "../data/who.json";


const TuitList = () => {
const tuitsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuits =>
         <TuitItem
           key={who._id} tuits={tuits}/> )
     }
   </ul>
 );
};
export default TuitList;