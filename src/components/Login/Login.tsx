import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { createField } from '../../hoc/createField/createField';
import { login } from '../../redux/authReducer';
import { RootStateType } from '../../redux/store';
import { required } from '../../utils/validators';

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
    isAuth: boolean;
    userId: number | undefined;
};

const Login: React.FC<PropsType> = (props) => {
    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />;

    const onSubmit = (values: LoginFormDataType) => {
        props.login(values.login, values.password, values.rememberMe);
    };

    return (
        <div>
            <div>Login</div>
            <div>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

type LoginFormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    const Input = createField('input');
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login" component={Input} type="text" validate={[required]} />
            <Field name="password" component={Input} type="password" validate={[required]} />
            Remember Me
            <Field name="rememberMe" component={Input} type="checkbox" />
            <button>Log In</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm);

const mstp = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userData?.id,
    };
};

const mdtp = { login };

export const LoginContainer = connect(mstp, mdtp)(Login);
