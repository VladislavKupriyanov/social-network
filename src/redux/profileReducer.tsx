export type PostType = {
    id: number;
    post: string;
    likeCount: number;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string;
};

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;

const initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            likeCount: 10,
        },
        {
            id: 2,
            post: 'Omnis, similique? In ullam incidunt est aperiam?',
            likeCount: 11,
        },
        {
            id: 3,
            post:
                'Repellendus dolores iure, voluptate nam quos quia asperiores, explicabo maxime est blanditiis, dolorum ratione delectus?',
            likeCount: 11,
        },
    ],
    newPostText: '',
};

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state = initialState, action: ProfileActionsTypes) => {
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

export const addPostAC = () => {
    return { type: ADD_POST } as const;
};

export const updateNewPostTextAC = (newPostNext: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: newPostNext } as const;
};