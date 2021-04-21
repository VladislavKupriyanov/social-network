import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import { store } from '../../../redux/store';
import { MyPosts } from './MyPosts';

export const MyPostsContainer: React.FC = () => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostAC());
    };

    const updateNewPostText = (newPostText: string) => {
        store.dispatch(updateNewPostTextAC(newPostText));
    };

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};
