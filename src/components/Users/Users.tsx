import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/usersReducer';
import { Pagination } from '../common/Pagination/Pagination';
import s from './Users.module.css';

type PropsType = {
    users: Array<UserType>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
};

export const Users: React.FC<PropsType> = ({
    users,
    follow,
    unfollow,
    usersCount,
    pageSize,
    currentPage,
    setCurrentPage,
}) => {
    const usersElements = users.map((u) => {
        const onFollowClick = () => {
            axios
                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': 'ec16bc5c-e85d-44b7-ba30-15fe65f3b43f',
                    },
                })
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        follow(u.id);
                    }
                });
        };

        const onUnfollowClick = () => {
            axios
                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                        'API-KEY': 'ec16bc5c-e85d-44b7-ba30-15fe65f3b43f',
                    },
                })
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        unfollow(u.id);
                    }
                });
        };

        return (
            <div className={s.user} key={u.id}>
                <NavLink to={`/profile/${u.id}`}>
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
                </NavLink>
                {u.followed ? (
                    <button onClick={onUnfollowClick}>Unfollow</button>
                ) : (
                    <button onClick={onFollowClick}>Follow</button>
                )}
            </div>
        );
    });

    return (
        <>
            <Pagination
                itemsCount={usersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div className={s.users}>{usersElements}</div>
        </>
    );
};
