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
};

export type UsersActionsTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>;

const initialState: UsersPageType = {
    users: [],
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const usersReducer = (state = initialState, action: UsersActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
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
        default:
            return state;
    }
};

export const followAC = (userId: number) => {
    return { type: FOLLOW, userId } as const;
};

export const unfollowAC = (userId: number) => {
    return { type: UNFOLLOW, userId } as const;
};

export const setUsersAC = (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const;
};
