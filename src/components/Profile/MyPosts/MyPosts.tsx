import React from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../../redux/state';
import { Post } from './Post/Post';

type PropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts: React.FC<PropsType> = ({ posts, addPost, newPostText, updateNewPostText }) => {

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onClickAddPost = () => {
        if (textAreaRef.current && textAreaRef.current.value !== '') {
            addPost(textAreaRef.current.value);
        };
    };

    const onChangeNewPostText = () => {
        const text = textAreaRef.current?.value;
        if (text || text === '') {
            updateNewPostText(text);
        };
    };

    const postsElements = posts.map(p => <Post key={p.id} post={p.post} likeCount={p.likeCount} />);

    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <textarea value={newPostText}
                onChange={onChangeNewPostText}
                ref={textAreaRef}
                className={s.add_post_area}
                placeholder='Что у вас нового?' />
            <button onClick={onClickAddPost} className={s.send_btn}>Добавить пост</button>
            {postsElements}
        </div>
    );
};