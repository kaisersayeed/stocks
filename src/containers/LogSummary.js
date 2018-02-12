import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchStocks} from '../redux/actions';
import LogContainer from '../containers/LogContainer';
import Summary from '../components/Summary'

class LogSummaryContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(()=> this.props.fetchStocks(), 2000);
  }

  render() {
    return (
      <div className="content" >
        <LogContainer stocks={this.props.stocks}/>
        <Summary stockSummary={this.props.stockSummary}/>
      </div>
    );
  }
}

const mapStateToProps = ({stocks, stockSummary})=> {
  return {stocks, stockSummary};
};

export default connect(mapStateToProps, { fetchStocks })(LogSummaryContainer);


