var React = require('react');

var Contact = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Contact Me</h1>
            <p className="lead">Email addy</p>
            <hr className="m-y-2"></hr>
            <p className="lead">
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Contact;