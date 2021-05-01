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
    toogleFollowInProgress,
} from '../../redux/usersReducer';
import { Component } from 'react';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

type PropsType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setUsersCount: (usersCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    toogleIsFetching: (isFetching: boolean) => void;
    toogleFollowInProgress: (isFetching: boolean, userId: number) => void;
};

class UsersAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        this.props.toogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
        });
    };

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toogleIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        const {
            users,
            follow,
            unfollow,
            usersCount,
            pageSize,
            currentPage,
            isFetching,
            followInProgress,
            toogleFollowInProgress,
        } = this.props;
        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        toogleFollowInProgress={toogleFollowInProgress}
                        followInProgress={followInProgress}
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
        followInProgress: state.usersPage.followInProgress,
    };
};

const mdtp = { follow, unfollow, setUsers, setUsersCount, setCurrentPage, toogleIsFetching, toogleFollowInProgress };

export const UsersContainer = connect(mstp, mdtp)(UsersAPIComponent);
