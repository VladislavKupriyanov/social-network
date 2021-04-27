import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { setUserProfile, ProfileType } from '../../redux/profileReducer';
import { RootStateType } from '../../redux/store';
import { Profile } from './Profile';

type PropsType = {
    profile: ProfileType;
    authUserId: number | undefined;
    setUserProfile: (profile: ProfileType) => void;
};

type ParamsType = {
    userId: string;
};

class ProfileAPIComponent extends Component<RouteComponentProps<ParamsType> & PropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.authUserId) {
            userId = this.props.authUserId.toString();
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    };

    render() {
        return <Profile profile={this.props.profile} />;
    }
}

const mstp = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        authUserId: state.auth.userData?.id,
    };
};

const mdtp = { setUserProfile };

const ProfileWithRouter = withRouter(ProfileAPIComponent);

export const ProfileContainer = connect(mstp, mdtp)(ProfileWithRouter);
