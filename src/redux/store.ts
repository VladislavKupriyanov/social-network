import { authReducer } from './authReducer';
import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer);
