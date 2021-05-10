import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, ProfileType } from '../../redux/profileReducer';
import { RootStateType } from '../../redux/store';
import { Profile } from './Profile';

type PropsType = {
    profile: ProfileType;
    authUserId: number | undefined;
    getUserProfile: (userId: string) => void;
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
        this.props.getUserProfile(userId);
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

const mdtp = { getUserProfile };

export const ProfileContainer = compose(withAuthRedirect, withRouter, connect(mstp, mdtp))(ProfileAPIComponent);
