import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { Users } from './Users';
import { follow, setUsers, unfollow } from '../../redux/usersReducer';

const mstp = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
    };
};

const mdtp = { follow, unfollow, setUsers };

export const UsersContainer = connect(mstp, mdtp)(Users);
