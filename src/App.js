import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actionPlus, actionMinus } from './actions/mainActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.actionMinus}>-</button>
        <span>{this.props.counter}</span>
        <button onClick={this.props.actionPlus}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.mainReducer.counter
});

export default connect(
  mapStateToProps,
  { actionPlus, actionMinus }
)(App);
