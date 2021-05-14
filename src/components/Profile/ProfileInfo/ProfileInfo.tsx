import s from './ProfileInfo.module.css';
import { ProfileType } from '../../../redux/profileReducer';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';

type PropsType = {
    profile: ProfileType;
    status: string;
    updateProfileStatus: (status: string) => void;
};

export const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateProfileStatus }) => {
    return (
        <div className={s.row}>
            <div>
                <img src={profile?.photos.large} alt="Avatar" className={s.avatar} />
            </div>
            <div className={s.profile_info}>
                <h3 className={s.profile_name}>{profile?.fullName}</h3>
                <div>
                    <ProfileStatus status={status} updateProfileStatus={updateProfileStatus} />
                </div>
                <span className={s.profile_descr}>{profile?.aboutMe}</span>
            </div>
        </div>
    );
};
