import s from './createField.module.css';

export const createField =
    (Component: string) =>
    ({ input, meta: { error, touched }, ...props }: any) => {
        const hasError = touched && error;

        return (
            <div>
                <Component {...input} {...props} className={hasError ? s.error : ''} />
                {hasError && <span>{error}</span>}
            </div>
        );
    };
