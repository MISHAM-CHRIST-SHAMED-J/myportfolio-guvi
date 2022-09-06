import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function Home() {
  return (
    
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 maindiv1">
                  <div class="submain">
                    <h1 class="anim">MISHAM CHRIST SHAMED J</h1>
                    <p class="anim2">MERN Stack Developer</p>
                    <Link to="/home/about" class="expobtn anim3" type="button">Explore</Link></div>
                  </div>
                <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 maindiv2">
                    <div class="backlogo"><img src="https://creativetimblog.com/blog/wp-content/uploads/2020/11/19362653-1024x683.jpg" class="picback"/>
                </div>
            </div>
        </div>
 </div> 
 
  )
}

export default Home