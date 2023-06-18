import React, { useState } from 'react';

interface Props {
  text:string
}

const Title = ({text}:Props) => {
  return (
    <div className="container">
        <h1 className="text-center mt-5">{text}</h1>
    </div>
  );
};

export default Title;

