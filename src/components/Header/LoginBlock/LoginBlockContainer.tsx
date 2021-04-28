import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setUserData, UserDataType } from '../../../redux/authReducer';
import { RootStateType } from '../../../redux/store';
import { LoginBlock } from './LoginBlock';

type PropsType = {
    userData: UserDataType;
    isAuth: boolean;
    setUserData: (userData: UserDataType) => void;
};

class LoginBlockAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                }
            });
    };

    render() {
        const { isAuth, userData } = this.props;

        return <LoginBlock isAuth={isAuth} login={userData?.login} />;
    }
}

const mstp = (state: RootStateType) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.isAuth,
    };
};

const mdtp = { setUserData };

export const LoginBlockContainer = connect(mstp, mdtp)(LoginBlockAPIComponent);
