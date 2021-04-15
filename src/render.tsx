import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { addPost, RootStateType, updateNewPostText } from './redux/state';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} updateNewPostText={updateNewPostText} state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};