import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import { StateType } from '../../../redux/store';
import { MyPosts } from './MyPosts';

const mstp = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mdtp = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextAC(newPostText));
        },
    };
};

export const MyPostsContainer = connect(mstp, mdtp)(MyPosts);
