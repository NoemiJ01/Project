import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <button className="navbar-brand">
        <img width="" height="65" alt="" />
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Food Violations
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home </a>
              </li>
              <li>
                <a href="#"> Data</a>
              </li>
              <li>
                <a href="#"> Page 2</a>
              </li>
            </ul>
          </div>
        </nav>
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link">
              Home
              <span className="sr-only"></span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Data</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search By Name"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
