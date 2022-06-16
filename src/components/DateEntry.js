import React from "react";
import styled from "styled-components";

const StyledDateEntry = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  justify-content: center;
`;

const DateEntry = (props) => {
  let inputDate;
  return (
    <StyledDateEntry>
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
    </StyledDateEntry>
  );
};

export default DateEntry;
