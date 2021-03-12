import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

/**
    Interface:
    -Input: Needs total number of movies and a pageSize. So this component can calculate the number of pages to render.
    // Note: The props also define the interface for our component

 */

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // We need an array [1...pagesCount].map(). Let's generate it with lodash
  // .range returns a new array. Note if pagesCount(The amount of movies we want on the page) is 10 and we only have 9 movies
  // well we should only have 1 page but do not show 1 on the page
  if (pagesCount === 1) {
    return null;
  }
  console.log(currentPage);

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
  currentPage: PropTypes.func.isRequired,
};

export default Pagination;

//  <li className="page-item">
//           <a className="page-link">1</a>
//         </li>
//         <li className="page-item">
//           <a className="page-link">2</a>
//         </li>
//         <li className="page-item">
//           <a className="page-link">3</a>
//         </li>
