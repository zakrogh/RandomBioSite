import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import TweetBtn from './TweetBtn';
/*eslint-disable */
function testFun(event){

  let selector = document.getElementById('homeNav');
  selector.classList.remove('active');
  selector = document.getElementById('aboutNav');
  selector.classList.remove('active');
  selector = document.getElementById('deadlinkNav');
  selector.classList.remove('active');
  selector = document.getElementById('disableddeadlinkNav');
  selector.classList.remove('active');
  let where = event.currentTarget.id
  document.getElementById(where).classList.add('active');
}
/*eslint-enable */

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
            <Link to="/" className="nav-item nav-link active" id="homeNav" onClick={testFun}>Home</Link>
            <a className="nav-item nav-link" href="#/about" id="aboutNav" onClick={testFun}>About</a>
            <a className="nav-item nav-link" href="#" id="deadlinkNav" onClick={testFun}>Dead Link</a>
            <a className="nav-item nav-link disabled" href="#" id="disableddeadlinkNav" onClick={testFun}>Disabled Dead Link</a>
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
