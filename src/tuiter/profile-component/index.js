import React from "react";
import profileArray from "./profile.json";
import ProfileItem from "./profileitem";

const ProfileList = () => {

 return(
   <ul className="list-group">
     {
       profileArray.map(profile =>
         <ProfileItem
           key={profile._id} profile={profile}/> )

     }
   </ul>
 );
};
export default ProfileList;