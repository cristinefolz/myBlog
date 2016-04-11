    // BlogApp
    //    BlogListData
    //        BlogList
    //            BlogCard
    //    EditBlogData
    //        EditBlogForm
    //    BlogFormData
    //        BlogForm
    //    SingleBlogData
    //        SingleBlogDetails
    //            CommentFormData
    //            CommentForm
    //        CommentList
    //            CommentCard

var React = require('react');
var ReactDOM = require('react-dom');

var BlogPostViewToggler = require('./BlogPostViewToggler');
var BlogListData = require('./BlogListData');
var EditBlogData = require('./EditBlogData');
var SingleBlogData = require('./SingleBlogData');
var BlogFormData = require('./BlogFormData');

var BlogApp = React.createClass({

  getInitialState: function() {
    return {
      activeComponent: 'postList',
      activePostId: null,
    }
  },

  getId: function(whichComponentState, id){
    if(whichComponentState === 'showOnePost'){
      return this.setState({ activePostId: id, activeComponent: 'onePost' })
    } else if(whichComponentState === 'editOnePost'){
      return this.setState({ activePostId: id, activeComponent: 'editPost'})
    } else {
      return null;
    }
  },

  showComp: function() {
    /* THIS FUNCTION RENDERS ONE COMPONENT 
    BASED ON activeComp State*/
    if(this.state.activeComponent === 'postList'){
      return <BlogListData getId={ this.getId }/>

    } else if (this.state.activeComponent === 'postForm') {
      return <BlogFormData toggleActiveComp={ this.toggleActiveComp }/>

    } else if (this.state.activeComponent === 'onePost') {
      return <SingleBlogDataData id={ this.state.activePostId }/>
      
    } else if (this.state.activeComponent === 'editPost') {
      return <EditBlogData id={ this.state.activePostId } toggleActiveComp={ this.toggleActiveComp }/>

    } else {
      throw new Error("Invalid activeComponent ", this.state.activeComponent)
    }
  },

  toggleActiveComp: function(name) {
    this.setState({ activeComponent: name })
  },

  render: function() {
      return (
        <div>

          <div className="jumbotron container">
            <h1 className="display-3">It's been on my mind....</h1>
              <p className="lead">Maybe have some images here??</p>
              <hr className="m-y-2"></hr>
              <p className="lead"></p>
          </div>

          <div className="container post-list">
            <BlogPostViewToggler toggleActiveComp={ this.toggleActiveComp }/>
            { this.showComp() }
          </div>

        </div>
      )
  }
});

module.exports = BlogApp;