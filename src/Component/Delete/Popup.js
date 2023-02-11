import React from "react";
import './Popup.css'
const Popup = props => {
  return (
    <div className="popup-box">
     
        
        {props.content}
      
    </div>
  );
};
 
export default Popup;