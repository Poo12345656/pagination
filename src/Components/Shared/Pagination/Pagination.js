import React from "react";
import Button from "../Button/Button";
import "./Pagination.css";

function Pagination({ noOfTotalRecord, noOfShowCount, onPageChange,activePage }) {
  const noOfPages = noOfTotalRecord / noOfShowCount;
  const btnArray = Array(Math.ceil(noOfPages)).fill("");
  console.log(noOfPages);

  return (
    <div>
      <div className="buttonWrapper">
      <Button
              className="Button"
              as="button"
              onClick={() => {
                onPageChange(activePage - 1);
              }}
              text="previous"
              disabled={activePage===1}
            />

        {btnArray.map((key, index) => {
          return (
            <Button
              className="Button"
              as="button"
              onClick={() => {
                onPageChange(index + 1);
              }}
              text={index + 1}
              disabled={activePage===index + 1}
            />
          );
        })}
             <Button
              className="Button"
              as="button"
              onClick={() => {
                onPageChange(activePage + 1);
              }}
              text="next"
              disabled={activePage===Math.ceil(noOfPages)}
            
            />
      </div>
    </div>
  );
}

export default Pagination;
