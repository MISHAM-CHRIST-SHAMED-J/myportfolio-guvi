import React from 'react'
import { Link, Outlet } from "react-router-dom";
import About from './About';
import "bootstrap/dist/css/bootstrap.min.css"


function Subhome() {
  return (
    
    <div class="container-fluid">
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <Link class="navbar-brand navlogo animlogo" to="/"></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navitems" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <Link class="nav-link " to="/">HOME</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/home/about">ABOUT</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/home/project">PROJECTS</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/home/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav> */}


<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <Link class="navbar-brand navlogo animlogo" to="/">MISHAM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navvbar navitems" id="navbarNav">
      <ul class="navbar-nav text-center">
        <li class="nav-item">
          <Link class="nav-link active animhome" aria-current="page" to="/">MAIN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link animabout" to="/home/about">ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link animproject" to="/home/project">PROJECT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link animcontact" to="/home/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    <Outlet></Outlet>
  </div>
  )
}

export default Subhome