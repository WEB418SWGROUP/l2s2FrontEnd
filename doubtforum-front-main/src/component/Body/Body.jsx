import React from 'react';
import './Body.css';

    function New2() {
        return <Body 
        src="bg-1@2x.png"
         />;
      }
      
      export default New2;
      
      function Body(props) {
        const { src } = props;
  return (
    <div className="body">
      <img className="bg"/>
      <div className="rectangle-55">
      <h1 className="we-are-here-to-help">
      <span className="span0">
        We are here to help you
        <br />
      </span>
      <span className="span1">Ask your questions...</span>
    </h1>
    </div>
    </div>
    
  );
}

