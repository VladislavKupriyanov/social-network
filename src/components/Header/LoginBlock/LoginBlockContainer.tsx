import { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, UserDataType, logout } from '../../../redux/authReducer';
import { RootStateType } from '../../../redux/store';
import { LoginBlock } from './LoginBlock';

type PropsType = {
    userData: UserDataType;
    isAuth: boolean;
    getUserData: () => void;
    logout: () => void;
};

class LoginBlockAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        this.props.getUserData();
    };

    render() {
        const { isAuth, userData, logout } = this.props;

        return <LoginBlock isAuth={isAuth} login={userData?.login} logout={logout} />;
    }
}

const mstp = (state: RootStateType) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.isAuth,
    };
};

const mdtp = { getUserData, logout };

export const LoginBlockContainer = connect(mstp, mdtp)(LoginBlockAPIComponent);
