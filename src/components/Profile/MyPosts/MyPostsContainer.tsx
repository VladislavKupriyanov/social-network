import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import { RootStateType } from '../../../redux/store';
import { MyPosts } from './MyPosts';

const mstp = (state: RootStateType) => {
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
