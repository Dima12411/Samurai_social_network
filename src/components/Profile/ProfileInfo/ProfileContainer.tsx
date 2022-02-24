import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {getUserProfile, ProfileType} from "../../../redux/profileReducer";
import {withRouter, WithRouterType} from "../../common/WithRouter/withRouter";
import withAuthRedirect from "../../../hoc/withAuthRedirect";



type mapStateToPropsType = {
    profile: ProfileType
}



type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = WithRouterType & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
       this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state: rootReducerType) : mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withUrlDateContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withUrlDateContainerComponent);