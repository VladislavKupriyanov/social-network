export type PostType = {
    id: number;
    post: string;
    likeCount: number;
};

type ContactProfileType = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
};

type PhotosProfileType = {
    small: string;
    large: string;
};

export type ProfileType = null | {
    aboutMe: string;
    contacts: ContactProfileType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosProfileType;
};

export type ProfilePageType = {
    profile: ProfileType;
    posts: Array<PostType>;
    newPostText: string;
};

export type ProfileActionsTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>;

const initialState: ProfilePageType = {
    profile: null,
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
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const profileReducer = (state = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        default:
            return state;
    }
};

export const addPost = () => {
    return { type: ADD_POST } as const;
};

export const updateNewPostText = (newPostText: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText } as const;
};

export const setUserProfile = (profile: ProfileType) => {
    return { type: SET_USER_PROFILE, profile } as const;
};