import { ProfilePageType } from './store';

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostAC = () => {
    return { type: ADD_POST } as const;
};

export const updateNewPostTextAC = (newPostNext: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: newPostNext } as const;
};

export const profileReducer = (state: ProfilePageType, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};
