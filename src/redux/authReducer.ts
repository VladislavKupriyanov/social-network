export type UserDataType = {
    id: number;
    login: string;
    email: string;
} | null;

export type AuthType = {
    userData: UserDataType;
    isAuth: boolean;
};

export type AuthActionsTypes = ReturnType<typeof setUserData>;

const initialState: AuthType = {
    userData: null,
    isAuth: false,
};

const SET_USER_DATA = 'SET_USER_DATA';

export const authReducer = (state = initialState, action: AuthActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.userData, isAuth: true };
        default:
            return state;
    }
};

export const setUserData = (userData: UserDataType) => {
    return { type: SET_USER_DATA, userData } as const;
};
