import React from 'react';
import {Navigate} from "react-router-dom";
import {rootReducerType} from "../redux/reduxStore";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: rootReducerType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login'/>
            return <Component {...this.props}/>
        }
    }
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}




export default withAuthRedirect;