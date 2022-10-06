import React, {Component} from "react";

class NavBar extends Component {

    render() {
        return (
        <React.Fragment>

       <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
  <a className="navbar-brand" href="/#">hook-em-up</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <a className="nav-link" href="/#">Home</a>
      </li>


    </ul>

  </div>
</nav>
        </React.Fragment>
  
        );
        }
    }

export default NavBar;