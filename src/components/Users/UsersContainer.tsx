import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { Users } from './Users';
import {
    follow,
    setUsers,
    unfollow,
    UserType,
    setUsersCount,
    setCurrentPage,
    toogleIsFetching,
} from '../../redux/usersReducer';
import { Component } from 'react';
import axios from 'axios';
import { Preloader } from '../common/Preloader/Preloader';

type PropsType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setUsersCount: (usersCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    toogleIsFetching: (isFetching: boolean) => void;
};

class UsersAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        this.props.toogleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toogleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const { users, follow, unfollow, usersCount, pageSize, currentPage, isFetching } = this.props;
        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        usersCount={usersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        setCurrentPage={this.onPageChanged}
                    />
                )}
            </>
        );
    }
}

const mstp = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

const mdtp = { follow, unfollow, setUsers, setUsersCount, setCurrentPage, toogleIsFetching };

export const UsersContainer = connect(mstp, mdtp)(UsersAPIComponent);
