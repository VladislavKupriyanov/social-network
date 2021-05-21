import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getProfileStatus, updateProfileStatus, ProfileType } from '../../redux/profileReducer';
import { RootStateType } from '../../redux/store';
import { Profile } from './Profile';

type PropsType = {
    profile: ProfileType;
    authUserId: number | undefined;
    status: string;
    getUserProfile: (userId: string) => void;
    getProfileStatus: (userId: string) => void;
    updateProfileStatus: (status: string) => void;
};

type ParamsType = {
    userId: string;
};

class ProfileAPIComponent extends Component<RouteComponentProps<ParamsType> & PropsType> {
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.getUserProfile(userId);
            this.props.getProfileStatus(userId);
        }
    };

    componentDidUpdate = (prevProps: RouteComponentProps<ParamsType> & PropsType) => {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            this.props.getUserProfile(userId);
            this.props.getProfileStatus(userId);
        }
    };

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}
            />
        );
    }
}

const mstp = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        authUserId: state.auth.userData?.id,
        status: state.profilePage.status,
    };
};

const mdtp = { getUserProfile, getProfileStatus, updateProfileStatus };

export const ProfileContainer = compose<React.ComponentType>(withAuthRedirect, withRouter, connect(mstp, mdtp))(ProfileAPIComponent);
