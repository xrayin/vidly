import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange, onPrevPage, onNextPage}) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    //if only 1 page, don't render anything.
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav style={{cursor: "pointer"}} aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><button onClick={() => onPrevPage(currentPage, pages)}
                                             className="page-link">Previous</button></li>
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <button onClick={() => onPageChange(page)} className="page-link">{page}</button>
                    </li>
                ))}
                <li className="page-item"><button onClick={() => onNextPage(currentPage, pages)}
                                             className="page-link">Next</button></li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onPrevPage: PropTypes.func.isRequired,
    onNextPage: PropTypes.func.isRequired
};

export default Pagination;
