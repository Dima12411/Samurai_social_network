import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {rootReducerType} from "../redux/reduxStore";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: rootReducerType): mapStateToPropsForRedirectType => {
    return {
        isAuth: true
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to='/login'/>
        return <Component {...restProps as T}/>
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}




export default withAuthRedirect;