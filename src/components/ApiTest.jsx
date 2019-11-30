import React, { Component } from 'react';
import { key, id } from '../config/keys.json'

// http://www.omdbapi.com/

class ApiTest extends Component {

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=' + key + '&type=movie&' + 'i=' + id)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('DATA:', data)
    })
  }

  render() {
    return (
      <div className='container mt-5'>

      </div>
    )
  }
}

export default ApiTest;
