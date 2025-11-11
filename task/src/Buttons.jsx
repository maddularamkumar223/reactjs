import React from "react";

const Buttons = ({ setDataState }) => {
  return (
    <div>
      <article>
        <button
          onClick={() => {
            setDataState(true);
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setDataState(false);
          }}
        >
          Incomplete
        </button>
      </article>
    </div>
  );
};

export default Buttons;
