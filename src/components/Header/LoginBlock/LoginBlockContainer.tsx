import { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, UserDataType } from '../../../redux/authReducer';
import { RootStateType } from '../../../redux/store';
import { LoginBlock } from './LoginBlock';

type PropsType = {
    userData: UserDataType;
    isAuth: boolean;
    getUserData: () => void;
};

class LoginBlockAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        this.props.getUserData();
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

const mdtp = { getUserData };

export const LoginBlockContainer = connect(mstp, mdtp)(LoginBlockAPIComponent);