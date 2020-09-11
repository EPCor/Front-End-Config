import React from 'react';
import { connect } from 'react-redux';
import { updateData } from '~/redux/action';

@connect(
  state => ({
    data: state.home.data,
  }),
  {
    updateData,
  }
)
class About extends React.Component {
  handleClick = () => this.props.updateData(this.props.data + 1);
  render() {
    return (
      <>
        <h2>About Page:</h2>
        <div onClick={this.handleClick}>global count: {this.props.data}</div>
      </>
    );
  }
}

export default About;
