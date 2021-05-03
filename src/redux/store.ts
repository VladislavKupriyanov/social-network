import { authReducer } from './authReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';
import thunk from 'redux-thunk';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
