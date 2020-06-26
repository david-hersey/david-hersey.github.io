import React from 'react';

class Prompt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    };
  }

  handleMessage (event) => {
    console.log('HANDLE MESSAGE:', event)
    console.log('HANDLE MESSAGE STATE BEFORE:', this.state.accepted)
    console.log('WILL SET A COOKIE ON THIS')
    this.setState({
      accepted: true
    })
    console.log('HANDLE MESSAGE STATE AFTER:', this.state.accepted)
  }

  componentDidMount() {
    this.setState({
      accepted: false
    })
    console.log('ACCEPTED STATE:', this.state.accepted)
  }

  render() {
    return (
      <React.Fragment>
        <div className="alert alert-warning alert-dismissible fade show fixed-bottom" role="alert">
          <p>
            <strong>Please can we all agree that everything is ok?</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" data-action="Footer Message Accepted" data-category="Messaging" data-label="Accept Alert" onClick={this.handleMessage}>
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default Prompt;