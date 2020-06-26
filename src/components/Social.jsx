import React from 'react'
// import Tweets from  './Tweets.jsx';
// Going to use this page to pump some data in
// Called it social because I felt this might be good data to use???

// Perhaps also look at https://mockaroo.com/

class Social extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchRandomData();
  }

  fetchRandomData() {
    fetch('https://randomuser.me/api/')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('DATA:', data.results[0])
      this.setState({
        users: data.results[0]
      })
    })
  }
  */

  render () {

    return (
      <div className='container mt-5'>
        <h1>Social</h1>
        <p>For now this is links to socials.</p>
        <p>Going forward a more involved socials page</p>
        <div className='row'>
          <div className='col-md-6'>
            <a href='https://www.linkedin.com/in/david-hersey-b948294a' data-action="Clicked" data-category="Social Links" data-label="Linkedin"><img src="./images/linkedin.svg" className="linkedinLogo" /></a>
          </div>
        </div>
        {/* <div className='row'>
          <Tweets />
        </div> */}

        {/* <div className="row">
         <div>Now I am: {this.state.users.gender}</div>
        </div>

        <div className="row">
          <div>Name: </div>
          {this.state.users.name && Object.values(this.state.users.name).map((value, key) => {
            console.log('KEY:', key)
            console.log('VALUE:', value)
            return (
              <div key={key}>{value}</div>
            )
          })}
        </div> */}

      </div>
    )
  }
}

export default Social
