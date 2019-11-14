import React from 'react';
import SearchBox from './SearchBox';
import TweetBtn from './TweetBtn';

function NavBar(){
  return (
    <div>
      <style global jsx>{`
      .bg-light{
        background-color: bisque!important;
      }
    `}</style>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <span className="navbar-toggler-icon"></span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#/about">About</a>
            <a className="nav-item nav-link" href="#">Dead Link</a>
            <a className="nav-item nav-link disabled" href="#">Disabled Dead Link</a>
          </div>
        </div>
        <SearchBox/>
        <TweetBtn/>
      </nav>
      <hr/>
    </div>
  );
}

export default NavBar;
