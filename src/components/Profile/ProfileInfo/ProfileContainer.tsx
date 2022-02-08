import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../../redux/profileReducer";
import {withRouter, WithRouterType} from "../../common/WithRouter/withRouter";


type mapStateToPropsType = {
    profile: ProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = WithRouterType & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: rootReducerType) : mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}

let withUrlDateContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDateContainerComponent);