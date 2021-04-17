import s from './Message.module.css';

type PropsType = {
    message: string;
};

export const Message: React.FC<PropsType> = ({ message }) => {
    return <div className={s.messages}>{message}</div>;
};
