import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostType } from '../../../redux/profileReducer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type PropsType = {
    posts: Array<PostType>;
    addPost: (newPostText: string) => void;
};

export const MyPosts: React.FC<PropsType> = ({ posts, addPost }) => {
    const postsElements = posts.map((p) => <Post key={p.id} post={p.post} likeCount={p.likeCount} />);

    const onAddPost = (values: AddPostFormDataType) => {
        addPost(values.newPost);
    };

    return (
        <div className={s.my_posts}>
            <h4>Мои посты</h4>
            <AddPostReduxForm onSubmit={onAddPost} />
            {postsElements}
        </div>
    );
};

type AddPostFormDataType = {
    newPost: string;
};

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPost" component="textarea" />
            <button>Отправить</button>
        </form>
    );
};

const AddPostReduxForm = reduxForm<AddPostFormDataType>({ form: 'addPostProfileForm' })(AddPostForm);
