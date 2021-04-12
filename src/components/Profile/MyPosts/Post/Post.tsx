import s from './Post.module.css';
import Avatar from '../../../../assets/avatar.jpg';

export const Post = () => {
    return (
        <div className={s.post}>
            <img src={Avatar} className={s.post_avatar}/>
            <span className={s.post_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi assumenda ex delectus voluptatum, iusto magnam laborum magni repellat cupiditate, illum quas dolorum consectetur qui beatae libero! Recusandae et debitis repudiandae!</span>
        </div>
    );
};