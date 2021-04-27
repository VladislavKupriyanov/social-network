import { ProfileType } from '../../redux/profileReducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType;
};

export const Profile: React.FC<PropsType> = ({ profile }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
};
