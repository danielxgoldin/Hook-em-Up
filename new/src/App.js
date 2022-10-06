import React, {Component} from "react";

class NavBar extends Component {

    render() {
        return (
        <React.Fragment>

       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">hook-em-up</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>


    </ul>

  </div>
</nav>
        </React.Fragment>
  
        );
        }
    }

export default NavBar;
