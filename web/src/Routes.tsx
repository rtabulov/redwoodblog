import { Router, Route, Set, Private } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/article/{id}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
