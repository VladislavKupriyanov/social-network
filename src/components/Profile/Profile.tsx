import s from './Profile.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile: React.FC = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};
