import React from 'react'
import BlogOpen from "../BlogDemo/BlogOpen";
import BlogNavbar from "../BlogDemo/BlogNavbar";
import BlogDetail1 from '../BlogDetails/BlogDetail1';
import BlogDetail2 from '../BlogDetails/BlogDetail2';
import SuggestedKit from '../BlogDetails/SuggestedKit';
import BlogMostView from '../BlogDemo/BlogMostView';

function BlogDetail() {
  return (
    <div>
      <BlogOpen value="Blog detail"/>
      <BlogNavbar/>
      <BlogDetail1/>
      <BlogDetail2/>
      <SuggestedKit/>
      <BlogMostView/>
    </div>
  )
}

export default BlogDetail
