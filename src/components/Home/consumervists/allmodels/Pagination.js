import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ totalposts, posterpage, setCurentpage }) {
  var pages = [];
  for (let i = 1; i < Math.ceil(totalposts / posterpage); i++) {
     pages.push(i)
  }
  return (
    <>
      <nav aria-label="Page navigation " style={{ 
        width:'50%',
        margin: 'auto'
       }} >
        <ul className="pagination">
          {pages.map((number , key) => {
            return(
              <li key={key} className="page-item">
                <a className="page-link" onClick={() => setCurentpage(number)}>
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
