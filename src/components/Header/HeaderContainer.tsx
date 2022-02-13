import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {rootReducerType} from "../../redux/reduxStore";
import {usersAPI} from "../../API/api";

class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        usersAPI.loginUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }


    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
        />
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: rootReducerType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);