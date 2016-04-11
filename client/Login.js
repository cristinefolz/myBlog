var React = require('react');

var Login = React.createClass ({
  render: function (){
    return (
      <div class = "container my-container">
        <div class = "row">
    
    
        <div class = "container col-lg-6 col-lg-offset-1 col-xs-10 col-xs-offset-1">

          <form action="/login" method="POST" role="form" class = "row">
            <legend class="legend line">Login</legend>
              <div class="form-group">
                <label for="" class="legend">Email</label>
                  <input name="email" type="email" class="form-control" id="" placeholder="Email goes here"></input>
                  <br></br>
                <label for="" class="legend">Password</label>
                  <input name="password" type="password" class="form-control" id="" placeholder="Password goes here"></input>
                  <br></br>
                </div>
                <button type="submit" class="legend button-color">Submit</button>
          </form>

       
          <br></br>
         

          <form action="/signup" method="POST" role="form" class= 'row'>
            <legend class="legend line">Sign Up</legend>

              <div class="form-group">
                <label class="legend" for="">Choose a Username</label>
                  <input name="username" type="username" class="form-control" id="" placeholder="Username"></input>
                  <br></br>
                <label class="legend" for="">Email</label>
                  <input name="email" type="email" class="form-control" id="" placeholder="Email"></input>
                  <br></br>
                <label class="legend" for="">Password</label>
                  <input name="password" type="password" class="form-control" id="" placeholder="Password"></input>
                  <br></br>
              </div>
              <button type="submit" class="legend button-color">Create</button>
          </form>

             
        </div>
        </div>
      </div>
      )
  }
});

module.exports = Login;