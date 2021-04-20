import { combineReducers, createStore } from 'redux';
import { profileReducer, ProfilePageType } from './profileReducer';
import { dialogsReducer, DialogsPageType } from './dialogsReducer';

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);
