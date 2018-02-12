import React, { Component } from 'react';
import LogInterrupter from '../components/LogInterrupter'
import Log from '../components/Log'
import * as appConstant from '../constants/appConstant';
import {interruptButtonClicked} from '../redux/actions'
import {connect} from "react-redux";

class LogContainer extends Component {
  constructor(props) {
    super(props);
    this.handleIntButtonClick = this.handleIntButtonClick.bind(this);
  }

  handleIntButtonClick(buttonVal){
    if(buttonVal === appConstant.INTERRUPT_BUTTON_PAUSE) {
      this.props.interruptButtonClicked(appConstant.INTERRUPT_BUTTON_RESUME);
    } else {
      this.props.interruptButtonClicked(appConstant.INTERRUPT_BUTTON_PAUSE);
    }
  };

  render() {
    return (
      <div className="left-content">
        <div className="box">
          <h1>Logs</h1>
          <LogInterrupter
              onButtonClick={this.handleIntButtonClick}
              buttonText={this.props.stocks.interruptButtonText}/>
        </div>
        <div className="log-box">
          <Log stocksLogList={this.props.stocks.stocksLogList}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { interruptButtonClicked })(LogContainer);


