import { renderTree } from "../render"

export type PostType = {
    id: number
    post: string
    likeCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', likeCount: 10 },
            { id: 2, post: 'Omnis, similique? In ullam incidunt est aperiam?', likeCount: 11 },
            { id: 3, post: 'Repellendus dolores iure, voluptate nam quos quia asperiores, explicabo maxime est blanditiis, dolorum ratione delectus?', likeCount: 11 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Vlad' },
            { id: 2, name: 'Sasha' },
            { id: 3, name: 'Artem' },
            { id: 4, name: 'Zhenya' },
            { id: 5, name: 'Maxim' },
            { id: 6, name: 'Kirill' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'How are you?' },
            { id: 4, message: 'What?' },
            { id: 5, message: 'Who?' },
            { id: 6, message: 'Yo!' }
        ]
    }
};

export const addPost = (postText: string) => {
    const newPost: PostType = { id: state.profilePage.posts.length + 1, post: postText, likeCount: 0 };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
    console.log(state.profilePage.posts)
};

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    renderTree(state);
};