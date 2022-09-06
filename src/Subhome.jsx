import React from 'react'
import { Link, Outlet } from "react-router-dom";
import About from './About';






function Subhome() {
  return (
    
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <Link class="navbar-brand navlogo animlogo" to="/"></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navitems" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link animhome" to="/">HOME</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link animabout" to="/home/about">ABOUT</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link animproject" to="/home/project">PROJECTS</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link animcontact" to="/home/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet></Outlet>
  </div>
  )
}

export default Subhome