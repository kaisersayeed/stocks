import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCompanyInfo} from '../redux/actions';
import Header from '../components/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanyInfo();
  }

  render() {
    return (
      <Header companyInfo={this.props.companyInfo}/>
    );
  }
}

const mapStateToProps = ({companyInfo})=> {
  return {companyInfo};
};

export default connect(mapStateToProps, { fetchCompanyInfo })(HeaderContainer);


