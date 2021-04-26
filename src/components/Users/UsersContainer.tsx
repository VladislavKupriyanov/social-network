import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { Users } from './Users';
import { follow, setUsers, unfollow, UserType, setUsersCount, setCurrentPage } from '../../redux/usersReducer';
import { Component } from 'react';
import axios from 'axios';

type PropsType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setUsersCount: (usersCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
};

class UsersAPIContainer extends Component<PropsType> {
    componentDidMount = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const { users, follow, unfollow, usersCount, pageSize, currentPage } = this.props;
        return (
            <Users
                users={users}
                follow={follow}
                unfollow={unfollow}
                usersCount={usersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={this.onPageChanged}
            />
        );
    }
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    };
};

const mdtp = { follow, unfollow, setUsers, setUsersCount, setCurrentPage };

export const UsersContainer = connect(mstp, mdtp)(UsersAPIContainer);
