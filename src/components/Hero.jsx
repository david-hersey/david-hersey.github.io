import React from 'react';

// Hero plcaeholder come from: https://placeholder.com/

class Hero extends React.Component {
  render() {
    return (
        <div className='mt-5'>
          <img src={this.props.image} className='img-fluid' />
        </div>
      )
  }
}

export default Hero;
