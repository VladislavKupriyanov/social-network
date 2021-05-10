import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { RootStateType } from '../redux/store';

type PropsType = {
    isAuth: boolean;
};

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: PropsType) => {
        if (!props.isAuth) return <Redirect to="/login" />;

        return <Component {...props} />;
    };

    const mstp = (state: RootStateType) => {
        return {
            isAuth: state.auth.isAuth,
        };
    };

    const ConnectedRedirectComponent = connect(mstp)(RedirectComponent);

    return ConnectedRedirectComponent;
};
