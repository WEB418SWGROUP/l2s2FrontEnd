import React from 'react';
import './Header.css';


function Header(props) {
  const { spanText1, spanText2, spanText3 } = props;

  return (

    <div class="header">
  <h1 className="titlepoppins-semi-bold-black-24px">
          <span className="poppins-semi-bold-navy-blue-24px">{spanText1}</span>
          <span className="poppins-normal-black-24px">{spanText2}</span>
        </h1>
  <div class="header-right">
  <a href="Home">Go to site</a>
          </div>
  </div>
    
    
  );
}

function New() { 
  return (
      <Header
      spanText1="Service"
      spanText2="Hub"
      spanText3="Go to site"   
    />
  );
}
export default New;
