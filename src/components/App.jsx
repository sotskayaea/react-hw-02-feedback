import { Component } from 'react';
import Section from './Section';
import PropTypes from 'prop-types';


 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (value) => {
    this.setState({[value] : this.state[value] + 1})
  }

  countTotalFeedback = () =>{
    const { good,bad,neutral} = this.state
    let total = good+bad+neutral;
    return total 
  }
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    return Math.round(good*100/total);
  }

  render(){
    const { good,bad,neutral} = this.state
    return (
      <>
       <Section 
        title = 'Please leave feedback'
        good = {good}
        bad = {bad}
        neutral ={neutral}
        total = {this.countTotalFeedback}
        positivePercentage ={this.countPositiveFeedbackPercentage} 
        onLeaveFeedback = {this.onLeaveFeedback}
       />
      </>
    )
  
  }
 
};

App.propTypes = {
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }),
  onLeaveFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  ountPositiveFeedbackPercentage: PropTypes.func

}

export default App