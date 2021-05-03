import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { Users } from './Users';
import { follow, unfollow, UserType, setCurrentPage, getUsers } from '../../redux/usersReducer';
import { Component } from 'react';
import { Preloader } from '../common/Preloader/Preloader';

type PropsType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setCurrentPage: (currentPage: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
};

class UsersAPIComponent extends Component<PropsType> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    };

    render() {
        const { users, follow, unfollow, usersCount, pageSize, currentPage, isFetching, followInProgress } = this.props;
        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
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
        followInProgress: state.usersPage.followInProgress,
        isFetching: state.usersPage.isFetching,
    };
};

const mdtp = { follow, unfollow, setCurrentPage, getUsers };

export const UsersContainer = connect(mstp, mdtp)(UsersAPIComponent);
