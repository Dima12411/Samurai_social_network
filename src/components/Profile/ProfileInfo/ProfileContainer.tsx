import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../../redux/profileReducer";
import {withRouter, WithRouterType} from "../../common/WithRouter/withRouter";
import {usersAPI} from "../../../API/api";


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
        usersAPI.getUserProfile(userId)
            .then(response => {
                this.props.setUserProfile(response);
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