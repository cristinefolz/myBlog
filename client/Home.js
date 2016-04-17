var React = require('react');

var Home = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to Cristine's Blog!!</h1>
            <p className="lead">Sometimes you can't judge a book by it's cover....</p>
            <hr className="m-y-2"></hr>
            <p>While the display may be simple, there is some cool stuff going on under the hood </p>
            <p className="lead">
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Home;