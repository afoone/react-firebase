import React from 'react'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import PageHeader from '../components/PageHeader'
import Login from '../components/Login'
import SecurityWrapper from '../security/SecurityWrapper'

const Routes = () => {

const WrappedCreatePost = SecurityWrapper(CreatePost);


  return (
    <div>
      <Router>

        <PageHeader></PageHeader>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/new" component={WrappedCreatePost}/>
        <Route exact path="/post/:id/show" component={Post} />
        <Route exact path="/post/:id/edit" component={CreatePost} />
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/login" component={Login}></Route>

      </Router>
    </div>
  )
}

export default Routes
