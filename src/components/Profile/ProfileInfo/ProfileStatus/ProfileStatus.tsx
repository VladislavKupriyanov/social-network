import { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
    status: string;
    updateProfileStatus: (status: string) => void;
};

export const ProfileStatus: React.FC<PropsType> = ({ status, updateProfileStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(status);

    useEffect(() => {
        setTitle(status);
    }, [status]);

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateProfileStatus(title);
    };

    return editMode ? (
        <input type="text" value={title} onBlur={deactivateEditMode} autoFocus onChange={onChangeTitle} />
    ) : (
        <span onDoubleClick={activateEditMode}>{status}</span>
    );
};
