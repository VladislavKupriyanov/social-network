import { usersAPI, followAPI } from './../api/api';

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string;
    photos: {
        small: string;
        large: string;
    };
    status: string;
    followed: boolean;
};

export type UsersPageType = {
    users: Array<UserType>;
    usersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followInProgress: Array<number>;
};

export type UsersActionsTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof toogleFollowInProgress>;

const initialState: UsersPageType = {
    users: [],
    usersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: [],
};

const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOOGLE_FOLLOW_IN_PROGRESS = 'TOOGLE_FOLLOW_IN_PROGRESS';

export const usersReducer = (state = initialState, action: UsersActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_USERS_COUNT:
            return { ...state, usersCount: action.usersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOOGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
};

// ---Action Creators---

export const followSuccess = (userId: number) => {
    return { type: FOLLOW_SUCCESS, userId } as const;
};

export const unfollowSuccess = (userId: number) => {
    return { type: UNFOLLOW_SUCCESS, userId } as const;
};

export const setUsers = (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const;
};

export const setUsersCount = (usersCount: number) => {
    return { type: SET_USERS_COUNT, usersCount } as const;
};

export const setCurrentPage = (currentPage: number) => {
    return { type: SET_CURRENT_PAGE, currentPage } as const;
};

export const toogleIsFetching = (isFetching: boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching } as const;
};

export const toogleFollowInProgress = (isFetching: boolean, userId: number) => {
    return { type: TOOGLE_FOLLOW_IN_PROGRESS, isFetching, userId } as const;
};

// ------

// Thunk Creators

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toogleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
        });
    };
};

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toogleFollowInProgress(true, userId));
        followAPI.follow(userId).then((data) => {
            dispatch(toogleFollowInProgress(false, userId));
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
        });
    };
};

export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toogleFollowInProgress(true, userId));
        followAPI.unfollow(userId).then((data) => {
            dispatch(toogleFollowInProgress(false, userId));
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
        });
    };
};

// ------
