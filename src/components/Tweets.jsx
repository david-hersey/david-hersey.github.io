import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

// THE AIM BELOW IS TO TRY AND PULL A CERTAIN AMOUNT OF TWEETS FROM ONE OR TWO RELEVANT USERS/PROFILES/ETC
// THIS IS NOT WORKING FULLY YET SO AM USING THE REACT-TWITTER-EMBED MODULE
// AM KEEPING THIS LOCAL ONLY FOR NOW

// SOME RESOURCES:
// https://www.npmjs.com/package/react-twitter-embed
// https://github.com/saurabhnemade/react-twitter-embed/blob/master/src/components/TwitterTimelineEmbed.js
// https://saurabhnemade.github.io/react-twitter-embed/?path=/story/twitter-timeline-embed--timeline-profile-with-screen-name

// https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline

// http://gettwitterid.com/?user_name=FrontendDaily&submit=GET+USER+ID

class Tweets extends React.Component {
  // getTweets () {
  //   const headers = new Headers({
  //     'Access-Control-Allow-Origin': 'http://localhost:3000/social',
  //     'Authentication': 'Basic',
  //     'Content-Type': 'application/json'
  //   })
  //   const request = new Request('https://api.twitter.com/1.1/statuses/user_timeline.json?email_address=david.hersey73@gmail.com&password=twitter-southUpper!!2&screen_name=FrontendDaily&count=2&user_id=359047792', {
  //     method: 'GET',
  //     headers: headers,
  //     mode: 'no-cors',
  //     cache: 'default'
  //   })
  //   // IF IN LOCAL STORAGE AND REQUIRED BY THE PARAMS WE SET RETURN THESE, IF NOT LOOK UP SOME MORE
  //   fetch(request)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('DATA:', data)
  //   }).catch(error => {
  //     console.log('There is an issue:', error)
  //   })
  // }

  // componentDidMount () {
  //   this.getTweets()
  // }

  render () {
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='FrontendDaily'
          options={{ height: 400 }}
        />
      </div>
    )
  }
}

export default Tweets
