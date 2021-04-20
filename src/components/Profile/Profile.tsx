import s from './Profile.module.css';
import Avatar from '../../assets/avatar.jpg';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfilePageType } from '../../redux/profileReducer';

type PropsType = {
    state: ProfilePageType;
    dispatch: (action: any) => void;
};

export const Profile: React.FC<PropsType> = ({ state, dispatch }) => {
    return (
        <div className={s.profile}>
            <div className={s.row}>
                <div>
                    <img src={Avatar} alt="Avatar" className={s.avatar} />
                </div>
                <div className={s.profile_info}>
                    <h3 className={s.profile_name}>Влад Куприянов</h3>
                    <span className={s.profile_descr}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut numquam maxime amet repellat, velit
                        ad sint est eos quod dignissimos incidunt odit pariatur excepturi in saepe vel consequatur! Sit,
                        earum!
                    </span>
                </div>
            </div>
            <MyPosts newPostText={state.newPostText} dispatch={dispatch} posts={state.posts} />
        </div>
    );
};
