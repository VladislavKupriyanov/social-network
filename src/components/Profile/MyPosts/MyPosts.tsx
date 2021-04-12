import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <textarea className={s.add_post_area} placeholder='Что у вас нового?' />
            <button className={s.send_btn}>Отправить</button>
            <Post />
            <Post />
            <Post />
        </div>
    );
};