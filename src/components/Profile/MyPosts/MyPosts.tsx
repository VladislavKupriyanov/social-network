import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

type PropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<PropsType> = ({ posts }) => {

    const postsElements = posts.map(p => <Post post={p.post} likeCount={p.likeCount} />);

    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <textarea className={s.add_post_area} placeholder='Что у вас нового?' />
            <button className={s.send_btn}>Отправить</button>
            {postsElements}
        </div>
    );
};