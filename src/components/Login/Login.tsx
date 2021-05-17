import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export const Login: React.FC = () => {
    const onClickLogin = (values: LoginFormDataType) => {
        console.log(values);
    };

    return (
        <div>
            <div>Login</div>
            <div>
                <LoginReduxForm onSubmit={onClickLogin} />
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
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="login" component="input" type="text" />
            <Field name="password" component="input" type="text" />
            <Field name="rememberMe" component="input" type="checkbox" />
            <button>Log In</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({ form: 'login' })(LoginForm);
