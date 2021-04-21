import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../redux/profileReducer';

type PropsType = {
    posts: Array<PostType>;
    newPostText: string;
    updateNewPostText: (newPostText: string) => void;
    addPost: () => void;
};

export const MyPosts: React.FC<PropsType> = ({ posts, newPostText, updateNewPostText, addPost }) => {
    const postsElements = posts.map((p) => <Post key={p.id} post={p.post} likeCount={p.likeCount} />);

    const onClickAddPost = () => {
        if (newPostText !== '') {
            addPost();
        }
    };

    const onChangeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    };

    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <textarea
                value={newPostText}
                onChange={onChangeNewPostText}
                className={s.add_post_area}
                placeholder="Что у вас нового?"
            />
            <button onClick={onClickAddPost} className={s.send_btn}>
                Добавить пост
            </button>
            {postsElements}
        </div>
    );
};
