// BlogApp
    //    BlogListData
    //        BlogList
    //            BlogCard
    //        EditBlogData
    //            EditBlogForm
    //        BlogFormData
    //            BlogForm
    //    SingleBlogData
    //        SingleBlogDetails
    //            CommentFormData
    //            CommentForm
    //        CommentList
    //            CommentCard



var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Notifier = require('./Notifier');
var BlogApp = require('./BlogComps/BlogApp');
var Home = require('./Home');
var About = require('./About');
var Contact = require('./Contact');

require('./stylesheets/main.scss');

var App = React.createClass({

  getInitialState: function() {
    return {
      activeComponent: 'BlogApp'
    }
  },

  setActiveComponent: function(componentName) {
    console.log("Found Comp: ", componentName);
    this.setState({
      activeComponent: componentName
    })
  },

  showWhichComponent: function() {
    switch(this.state.activeComponent) {
        case '':
            return <Home/>
            break;
        case 'Home':
            return <Home/>
            break;
        case 'Blog':
            return <BlogApp/>
            break;
        case 'About':
            return <About/>
            break;
        case 'Contact':
            return <Contact/>
            break;
        default:
            return <Home/>
    };
  },

  render: function() {
    return (
      <div>
        <NavBar setActiveComponent={ this.setActiveComponent }/>
          <div>
            { this.showWhichComponent() }
          </div>
        <Footer />
      </div>           
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
