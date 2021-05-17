import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators';

export type AddMessageDialogFormDataType = {
    newMessage: string;
};

const maxLenght10 = maxLength(10);

const AddMessageDialogForm: React.FC<InjectedFormProps<AddMessageDialogFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newMessage" component="textarea" validate={[required, maxLenght10]} />
            <button>Отправить</button>
        </form>
    );
};

export const AddMessageDialogReduxForm = reduxForm<AddMessageDialogFormDataType>({ form: 'addMessageDialogForm' })(
    AddMessageDialogForm
);
