import React from 'react'

require('dotenv').config({
  path: '.env'
})

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      replies: []
    };
  }

  componentDidMount () {
    fetch('https://www.googleapis.com/blogger/v3/blogs/4302155217026215564/posts?key=' + process.env.REACT_APP_BLOG_KEY)
    .then(response => response.json())
    .then(
      data => {
        console.log('BLOG', data.items)
        this.setState({
          posts: data.items,
          replies: data.replies
        })
      }
    );
  }

  render () {

    const blogPosts = this.state.posts.map((post, index) => {
      console.log('POST INDEX', index)
      console.log('POST', post)
      // DO A REQUEST ON THIS TO GRAB REPLIES
      console.log('REPLY LINK', post.replies.selfLink)
      return (
        <React.Fragment key={index}>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div>Published on: {post.published}</div>
        </React.Fragment>
      )
    })

    return (
      <div className='container mt-5'>
        <h1>Blog</h1>
        {blogPosts}
      </div>
    )
  }
}

export default Blog
