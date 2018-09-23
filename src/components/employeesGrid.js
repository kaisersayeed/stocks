import React from "react";

const EmployeesGrid =(props)=> {
  return (
      <div className="employees">
        <div className="row">
          <p className="col-md-12"> Our Employees </p>
        </div>
        <div className="row">
          {renderEmployees(props)}
        </div>
      </div>
  );
};

const renderEmployees = (props)=> {
  return props.employees.map((employee)=>{
    return (
        <div className="col-md-4 employee" key={employee.id}>
          <div  className="row">
            <div className="col-md-6">
              <img src={employee.avatar}/>
            </div>
            <div className="col-md-6">
              {employee.firstName} {employee.lastName}
              <p>{employee.bio.substring(0,15)}</p>
            </div>
          </div>
        </div>
    )
  })
};

export default EmployeesGrid;