import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import { RootStateType } from '../../../redux/store';
import { MyPosts } from './MyPosts';

const mstp = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mdtp = { addPost, updateNewPostText };

export const MyPostsContainer = connect(mstp, mdtp)(MyPosts);
