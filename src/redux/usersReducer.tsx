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
};

export type UsersActionsTypes =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setUsersCount>
    | ReturnType<typeof setCurrentPage>;

const initialState: UsersPageType = {
    users: [],
    usersCount: 0,
    pageSize: 10,
    currentPage: 1,
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

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
        case SET_USERS_COUNT:
            return { ...state, usersCount: action.usersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    }
};

export const follow = (userId: number) => {
    return { type: FOLLOW, userId } as const;
};

export const unfollow = (userId: number) => {
    return { type: UNFOLLOW, userId } as const;
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
