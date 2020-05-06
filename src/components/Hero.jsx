import React from 'react';

// Hero plcaeholder come from: https://placeholder.com/

// CAN I LOOK AT USING IMGIX TO MAKE THIS SMART?

class Hero extends React.Component {
  render() {
    return (
        <div>
          <img src={this.props.image} className='img-fluid' />
        </div>
      )
  }
}

export default Hero;
