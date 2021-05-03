import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/usersReducer';
import { Pagination } from '../common/Pagination/Pagination';
import s from './Users.module.css';

type PropsType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    followInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
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
    followInProgress,
}) => {
    const usersElements = users.map((u) => {
        const onFollowClick = () => {
            follow(u.id);
        };

        const onUnfollowClick = () => {
            unfollow(u.id);
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
                    <button disabled={followInProgress.some((id) => id === u.id)} onClick={onUnfollowClick}>
                        Unfollow
                    </button>
                ) : (
                    <button disabled={followInProgress.some((id) => id === u.id)} onClick={onFollowClick}>
                        Follow
                    </button>
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
