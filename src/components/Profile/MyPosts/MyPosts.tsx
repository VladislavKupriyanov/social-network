import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import { ActionTypes, PostType } from '../../../redux/store';
import { Post } from './Post/Post';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';

type PropsType = {
    posts: Array<PostType>;
    newPostText: string;
    dispatch: (action: ActionTypes) => void;
};

export const MyPosts: React.FC<PropsType> = ({ posts, newPostText, dispatch }) => {
    const postsElements = posts.map((p) => <Post key={p.id} post={p.post} likeCount={p.likeCount} />);

    const onClickAddPost = () => {
        if (newPostText !== '') {
            dispatch(addPostAC());
        }
    };

    const onChangeNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value));
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
