import React from 'react'


const Input = () => {
    return ( 
        <div className="form-group has-search pt-3">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          style={{ border: "none" }}
          className="form-control shadow-none"
          placeholder="Search Your Contact . . ."
        />
      </div>
     );
}
 
export default Input;