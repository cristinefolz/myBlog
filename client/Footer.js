var React = require('react');

var Footer = React.createClass ({
  render: function (){
    return (
      <div>

        <div className="navbar navbar-default navbar-fixed-bottom bottom-nav">
          <div className="container">
            <div className="social-icons">
              <div className="row">
                <div className="social-icons text-center">                  
                  <a href="https://www.linkedin.com/in/cristinefolz" target="_blank"><i className="fa fa-linkedin-square fa-2x icons"></i></a>
                  <a href="https://github.com/cristinefolz" target="_blank"><i className="fa fa-github-square fa-2x icons"></i></a>
                  <a href="https://twitter.com/CodeCristine" target="_blank"><i className="fa fa-twitter-square fa-2x icons"></i></a>                  
                  <a href="https://www.facebook.com/cristine.folz" target="_blank"><i className="fa fa-facebook-square fa-2x icons"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      )
  }
});

module.exports = Footer;