import React, { useState } from "react";

interface Props {
  onKeyDown: any;
}

const TextField = ({ onKeyDown }) => {
  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Centered Input"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default TextField;
