import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType, updateUserStatus} from "../../../redux/profileReducer";
import avatarDefault from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://healingatthecross.com/wp-content/uploads/2017/08/pexels-photo-248797.jpeg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {/*{props.profile.photos.large*/}
                {/*    &&*/}
                {/*    <img src={props.profile.photos.large}/>*/}
                {/*}*/}
                <img src={props.profile && props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault} alt=""/>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                <p>{props.profile.lookingForAJob ? `I'm looking for a job` : `I'm not looking for a job`}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{`Contact details for contacting me - ` + props.profile.contacts.vk}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;