import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import { RootStateType } from '../../../redux/store';
import { MyPosts } from './MyPosts';

const mstp = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};

const mdtp = { addPost };

export const MyPostsContainer = connect(mstp, mdtp)(MyPosts);
