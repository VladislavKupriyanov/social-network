import { authAPI } from './../api/api';
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
            return { ...state, userData: action.userData, isAuth: action.isAuth };
        default:
            return state;
    }
};

// ---Action Creators---

export const setUserData = (userData: UserDataType, isAuth: boolean) => {
    return { type: SET_USER_DATA, userData, isAuth } as const;
};

// ------

// ---Thunk Creators---

export const getUserData = () => {
    return (dispatch: any) => {
        authAPI.getUserData().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            }
        });
    };
};

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, false));
            }
        });
    };
};

// ------
