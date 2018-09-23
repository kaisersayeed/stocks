import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchEmployees} from '../redux/actions';
import EmployeesGrid from '../components/EmployeesGrid';

class EmployeesGridContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <EmployeesGrid employees={this.props.employees}/>
    );
  }
}

const mapStateToProps = ({employees})=> {
  return {employees};
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeesGridContainer);
