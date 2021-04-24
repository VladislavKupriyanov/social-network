import axios from 'axios';
import { Component } from 'react';
import { UserType } from '../../redux/usersReducer';
import s from './Users.module.css';

type PropsType = {
    users: Array<UserType>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
};

export class Users extends Component<PropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => this.props.setUsers(response.data.items));
    }

    render() {
        const { users, follow, unfollow } = this.props;

        const usersElements = users.map((u) => {
            const onFollowClick = () => {
                follow(u.id);
            };

            const onUnfollowClick = () => {
                unfollow(u.id);
            };

            return (
                <div className={s.user}>
                    <div>{u.name}</div>
                    {u.photos.small ? (
                        <img className={s.user_photo} src={u.photos.small} alt="user_photo" />
                    ) : (
                        <img
                            className={s.user_photo}
                            src="https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg"
                            alt="user_photo"
                        />
                    )}
                    {u.followed ? (
                        <button onClick={onUnfollowClick}>Unfollow</button>
                    ) : (
                        <button onClick={onFollowClick}>Follow</button>
                    )}
                </div>
            );
        });

        return <div className={s.users}>{usersElements}</div>;
    }
}
