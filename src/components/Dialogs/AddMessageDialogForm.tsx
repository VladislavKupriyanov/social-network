import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { createField } from '../../hoc/createField/createField';
import { maxLength, required } from '../../utils/validators';

export type AddMessageDialogFormDataType = {
    newMessage: string;
};

const maxLenght10 = maxLength(10);

const Textarea = createField('textarea');

const AddMessageDialogForm: React.FC<InjectedFormProps<AddMessageDialogFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newMessage"
                component={Textarea}
                validate={[required, maxLenght10]}
                placeholder="Напишите что-нибудь"
            />
            <button>Отправить</button>
        </form>
    );
};

export const AddMessageDialogReduxForm = reduxForm<AddMessageDialogFormDataType>({ form: 'addMessageDialogForm' })(
    AddMessageDialogForm
);
