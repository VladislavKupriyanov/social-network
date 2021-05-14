import { ProfileType } from '../../redux/profileReducer';
import { Preloader } from '../common/Preloader/Preloader';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType;
    status: string;
    updateProfileStatus: (status: string) => void;
};

export const Profile: React.FC<PropsType> = ({ profile, status, updateProfileStatus }) => {
    if (!profile) return <Preloader />;

    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} updateProfileStatus={updateProfileStatus} />
            <MyPostsContainer />
        </div>
    );
};
