var React = require('react');

var Login = React.createClass ({
  render: function (){
    return (
      <div className = "container my-container">
        <div className = "row">
    
    
        <div className = "container col-lg-6 col-lg-offset-1 col-xs-10 col-xs-offset-1">

          <form action="/login" method="POST" role="form" className = "row">
            <legend className="legend line">Login</legend>
              <div className="form-group">
                <label className="legend">Email</label>
                  <input name="email" type="email" className="form-control" id="" placeholder="Email goes here"></input>
                  <br></br>
                <label className="legend">Password</label>
                  <input name="password" type="password" className="form-control" id="" placeholder="Password goes here"></input>
                  <br></br>
                </div>
                <button type="submit" className="legend button-color">Submit</button>
          </form>

       
          <br></br>
         

          <form action="/signup" method="POST" role="form" className= 'row'>
            <legend className="legend line">Sign Up</legend>

              <div className="form-group">
                <label className="legend">Choose a Username</label>
                  <input name="username" type="username" className="form-control" id="" placeholder="Username"></input>
                  <br></br>
                <label className="legend">Email</label>
                  <input name="email" type="email" className="form-control" id="" placeholder="Email"></input>
                  <br></br>
                <label className="legend">Password</label>
                  <input name="password" type="password" className="form-control" id="" placeholder="Password"></input>
                  <br></br>
              </div>
              <button type="submit" className="legend button-color">Create</button>
          </form>

             
        </div>
        </div>
      </div>
      )
  }
});

module.exports = Login;