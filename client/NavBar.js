var React = require('react');

var links = ['Home', 'About', 'Blog', 'Contact'];

var NavBar = React.createClass ({
  
  render: function (){
    var self = this;
    var link = links.map(function(item){
    return (
        <li className="nav-item" key={ item }>
          <a className="nav-link" onClick={ self.props.setActiveComponent.bind(null, item) }>{ item }</a>
        </li>
      )
    })

    return (
      <div>

        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="/">CRISTINE FOLZ</a>
            <ul className="nav navbar-nav">
              { link }
            </ul>
        </nav>

        <div class="navbar-header page-scroll">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar">a</span>
                      <span class="icon-bar">b</span>
                      <span class="icon-bar">c</span>
                  </button>
              </div>

      </div> 
      )
  }
});

module.exports = NavBar;