import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';
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
    toogleFollowInProgress: (isFetching: boolean, userId: number) => void;
    followInProgress: Array<number>;
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
    toogleFollowInProgress,
}) => {
    const usersElements = users.map((u) => {
        const onFollowClick = () => {
            toogleFollowInProgress(true, u.id);
            followAPI.follow(u.id).then((data) => {
                toogleFollowInProgress(false, u.id);
                if (data.resultCode === 0) {
                    follow(u.id);
                }
            });
        };

        const onUnfollowClick = () => {
            toogleFollowInProgress(true, u.id);
            followAPI.unfollow(u.id).then((data) => {
                if (data.resultCode === 0) {
                    toogleFollowInProgress(false, u.id);
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
