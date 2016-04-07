var React = require('react');

var About = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Here is a little bit about me:</h1>
            <p className="lead">Link to linkedIn profile, GitHub Repo</p>
            <hr className="m-y-2"></hr>
            <p> Some pics, etc. </p>
            <p className="lead">
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = About;