import React from 'react';
import s from './Pagination.module.css';

type PropsType = {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
};

export const Pagination: React.FC<PropsType> = ({ itemsCount, pageSize, currentPage, setCurrentPage }) => {
    const createPages = (pages: Array<number>, pagesCount: number, currentPage: number) => {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i);
                    if (i === pagesCount) break;
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i);
                    if (i === pagesCount) break;
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
        }
    };

    const pages: Array<number> = [];

    const pagesCount = Math.ceil(itemsCount / pageSize);

    createPages(pages, pagesCount, currentPage);

    const pagesElements = pages.map((p, index) => {
        return (
            <span
                className={currentPage === p ? `${s.page} ${s.current_page}` : s.page}
                key={index}
                onClick={() => {
                    setCurrentPage(p);
                }}
            >
                {p}
            </span>
        );
    });

    return <div>{pagesElements}</div>;
};
