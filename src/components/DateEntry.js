import React from "react";
import "../styles/date-entry.css";

const DateEntry = (props) => {
  let inputDate;
  return (
    <div className="date-entry">
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        onChange={(evt) => {
          inputDate = evt.target.value;
        }}
      ></input>
      <button
        onClick={() => {
          props.setDate(inputDate);
        }}
      >
        Get Picture Of That Day
      </button>
      <button
        onClick={() => {
          const today = new Date();
          props.setDate(
            `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(today.getDate()).padStart(2, "0")}`
          );
        }}
      >
        Back To Today
      </button>
    </div>
  );
};

export default DateEntry;
