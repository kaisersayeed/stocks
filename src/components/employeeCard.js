import React from "react";

const EmployeeCard =(props)=> {
  return (
      <div className="header">
        <div className="row">
          <h1 className="col-md-12"> {props.employeeInfo.companyName} </h1>
        </div>
        <div className="row">
          <div className="col-md-9">
            {props.companyInfo.companyMotto}
          </div>
          <div className="col-md-3">
            Since {props.companyInfo.companyEst}
          </div>
        </div>
      </div>
  );
};
export default EmployeeCard;


