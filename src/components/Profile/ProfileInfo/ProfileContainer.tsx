import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../../redux/profileReducer";
import {withRouter, WithRouterType} from "../../common/WithRouter/withRouter";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: ProfileType
    status: string
}


type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = WithRouterType & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '21547'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);