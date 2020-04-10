import React from 'react';
import '../index.css';

const Scroll = (props) => {
  return (
    <div className="scroll" style={{ overflow: 'scroll', height: '500px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;