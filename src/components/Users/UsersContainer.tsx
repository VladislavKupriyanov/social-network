import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootStateType } from '../../redux/store';
import { Users } from './Users';
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/usersReducer';

const mstp = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
    };
};

const mdtp = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
    };
};

export const UsersContainer = connect(mstp, mdtp)(Users);
