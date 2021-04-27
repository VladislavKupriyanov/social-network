import s from './ProfileInfo.module.css';
import { ProfileType } from '../../../redux/profileReducer';

type PropsType = {
    profile: ProfileType;
};

export const ProfileInfo: React.FC<PropsType> = ({ profile }) => {
    return (
        <div className={s.row}>
            <div>
                <img src={profile?.photos.large} alt="Avatar" className={s.avatar} />
            </div>
            <div className={s.profile_info}>
                <h3 className={s.profile_name}>{profile?.fullName}</h3>
                <span className={s.profile_descr}>{profile?.aboutMe}</span>
            </div>
        </div>
    );
};
