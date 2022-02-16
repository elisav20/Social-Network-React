import React from "react";

const Paginator = ({ totalCount, pageSize, currentPage, onPageChanged }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div className="pagination">
            {pages.map((page) => {
                return (
                    <button
                        className={
                            page === currentPage
                                ? "pagination__item active"
                                : "pagination__item"
                        }
                        onClick={() => {
                            onPageChanged(page);
                        }}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Paginator;
