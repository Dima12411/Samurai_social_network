import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

export type ProfilePropstype = {
    profile: ProfileType
}

const Profile = (props: ProfilePropstype) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;