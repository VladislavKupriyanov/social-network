import { Component } from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../../api/api';
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
        authAPI.getUserData().then((data) => {
            if (data.resultCode === 0) {
                this.props.setUserData(data.data);
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
