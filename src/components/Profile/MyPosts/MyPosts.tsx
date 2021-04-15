import React from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../../redux/state';
import { Post } from './Post/Post';

type PropsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
}

export const MyPosts: React.FC<PropsType> = ({ posts, addPost }) => {

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const addPostOnClick = () => {
        if (textAreaRef.current && textAreaRef.current.value !== '') {
            addPost(textAreaRef.current.value);
            textAreaRef.current.value = '';
        };
    };

    const postsElements = posts.map(p => <Post post={p.post} likeCount={p.likeCount} />);

    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <textarea ref={textAreaRef} className={s.add_post_area} placeholder='Что у вас нового?' />
            <button onClick={addPostOnClick} className={s.send_btn}>Добавить пост</button>
            {postsElements}
        </div>
    );
};