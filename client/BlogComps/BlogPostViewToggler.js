var React = require('react');

var BlogPostViewToggler = React.createClass ({

  render: function() {

    return (
      <div>
        <section className="container col-xs-10 display">
          <a className="post-toggler"
          onClick={ this.props.toggleActiveComp.bind(null, 'postList') }>
          <h1 className="display-3"> Blog List </h1></a>

          <a className="post-toggler"
          onClick={ this.props.toggleActiveComp.bind(null, 'postForm') }>
          <h1 className="display-3"> New Post Form </h1></a>
        </section>
      </div>
    )
  }
});


module.exports = BlogPostViewToggler;