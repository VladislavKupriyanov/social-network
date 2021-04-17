import s from './Post.module.css';
import Avatar from '../../../../assets/avatar.jpg';

type PropsType = {
    post: string;
    likeCount: number;
};

export const Post: React.FC<PropsType> = ({ post, likeCount }) => {
    return (
        <div className={s.post}>
            <img alt="avatar" src={Avatar} className={s.post_avatar} />
            <span className={s.post_text}>{post}</span>
            <div className={s.post_likes}>{likeCount}</div>
        </div>
    );
};
