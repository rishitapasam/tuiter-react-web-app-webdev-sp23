import React, {useState} from "react";

import Form from 'react-bootstrap/Form';
import {updateProfile} from "../profile-component/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

const EditProfileComponent = () => {
    const defaultProfile = useSelector(state => state.profile)
    const [profile, setProfile] = useState(defaultProfile)
    const [userName, setName] = useState(profile.userName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [dateOfBirth,setdateOfBirth] = useState(profile.dateOfBirth);
    const [website, setWebsite] = useState(profile.website);


    function ChangeofName(n) {
        const newName = n.target.value;
        setName(newName);
        const newProfile = {
            ...profile,
            userName:newName
        }
        setProfile(newProfile)
    }

    function ChangeofBio(b) {
        const newBio = b.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    function ChangeofLocation(l) {
        const newLocation = l.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    function ChangeofWebsite(w) {
        const newWebsite = w.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile)
    }
    function ChangeofdateOfBirth(d) {
        const newdateOfBirth = d.target.value;
        setdateOfBirth(newdateOfBirth);
        const newProfile = {
            ...profile,
            dateOfBirth  : newdateOfBirth
        }
        setProfile(newProfile)
    }

    const dispatch = useDispatch();
    const updateUserProfile = (event) => {
        dispatch(updateProfile({
            ...profile,
            userName:userName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth:dateOfBirth
        }));
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }
    return(

        <div className="row mt-2">

        <div>
            <div className="ps-1">
                <div className="row px-3">
                    <button className="btn col-1 p-2"
                        onClick={() => routeChange()}><i className="bi bi-x-lg"></i>
                    </button>
                    <div className="col-9 p-2">
                        <div className="fw-bold"> Edit Profile</div>
                    </div>
                    <div className="col-2">
                        <button className="rounded-pill btn btn-primary float-end mb-2 ps-3 pe-3 me-1 fw-bold text-white"
                        onClick={(event) => {
                            updateUserProfile(event);
                            routeChange()
                        }}
                        >Save</button>
                    </div>
                </div>
                <div className="mt-2 pt-0 pb-5 position-relative ">

          <img  alt="profile" className=" w-100 border-bottom border-secondary rounded "src={`/images/${profile.bannerPicture}`} height = {300} width={200}/>

          <div className=" ps-4   position-absolute bottom-50 wd im ">
          <img   alt="profile" className="float-left float-start rounded-circle" src={`/images/${profile.profilePicture}`} height ={90} width={90} />
     </div>

                <div className="row d-inline p-3">

                    <Form.Group controlId="form.Textarea">
                        <Form.Label>username</Form.Label>
                        <Form.Control as="textarea" rows={1}
                                            value={userName}
                                             onChange={(event) => {
                                                 ChangeofName(event)}
                                             }
                                />

                        </Form.Group>
                        <Form.Group controlId="form.Textarea">
                        <Form.Label>bio</Form.Label>
                        <Form.Control as="textarea" rows={3}
                                            style={{height: '100px'}}
                                            value={bio}
                                            onChange={(event) =>
                                                 ChangeofBio(event)}
                               />

                        </Form.Group>
                        <Form.Group controlId="form.Textarea">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="textarea" rows={1}
                                             value={location}
                                             onChange={(event) =>
                                                 ChangeofLocation(event)}/>

                        </Form.Group>
                        <Form.Group controlId="form.Textarea">
                        <Form.Label>Website</Form.Label>
                        <Form.Control as="textarea" rows={1}
                                             value={website}
                                             onChange={(event) =>
                                                 ChangeofWebsite(event)}/>

                        </Form.Group>
                        <Form.Group controlId="form.Textarea">
                       <Form.Label>DOB</Form.Label>
                       <Form.Control as="textarea" rows={1} value={dateOfBirth}
                                             onChange={(event) =>
                                                 ChangeofdateOfBirth(event)} />
                        </Form.Group>




                </div>
            </div>

      </div>
    </div>
    </div>
   );
};
export default EditProfileComponent;