import React from 'react'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/new" component={CreatePost}></Route>
        <Route exact path="/post/:id/show" component={Post} />
        <Route exact path="/post/:id/edit" component={CreatePost} />

      </Router>
    </div>
  )
}

export default Routes
