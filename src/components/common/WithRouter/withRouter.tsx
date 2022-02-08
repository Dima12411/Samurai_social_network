import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

type ComponentWithRouterPropType = {
    location: any
    navigate: any
    params: {userId: string}
}

export type WithRouterType = {
    router: ComponentWithRouterPropType
}


export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: typeof Component) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}