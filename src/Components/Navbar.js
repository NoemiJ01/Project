import React from "react";

function Navbar() {
  return ( 
    
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="form-group">

      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  
  );
  }

export default Navbar;
