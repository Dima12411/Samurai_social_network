import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import {getAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);