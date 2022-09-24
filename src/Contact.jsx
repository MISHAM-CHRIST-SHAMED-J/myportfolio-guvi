import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import pic from "./logo.jpg"
import sql from "./mysql.png"
import svg from "./mongo.svg"
import boot from "./boot.svg"
import js from "./js.svg"
import node from "./node.svg"
import react from "./react.svg"
import html from "./html.svg"
import css from "./css.svg"
import jss from "./jss.svg"
import api from "./api.svg"
import sqll from "./sql.svg"




function Contact() {
return (
<div class="container-fluid mama ">
<div class="main-body kiwi ">
<div class="row gutters-sm">
            <div class="col-md-3 mb-3">
              <div class="card" style={{border: "none",boxShadow:"none"}}>
                <div class="card-body abc">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={pic} alt="Admin" class="rounded-circle" width="180" height={180}/>
                    <div class="mt-3">
                      <h4>MISHAM J</h4>
                      <p class="text-secondary mb-1">MERN Stack Developer</p>
                      <p class="text-muted font-size-sm">Kanyakumari</p>
                      <a class="expobtn12" href={sql} download>Resume</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-1" style={{border: "none",boxShadow:"none"}}>
                <ul class=" list-group abc">
                  <li class="list-group-item abcc d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Website</h6>
                    <a class="expobtn1" href='https://mishamportfolio.netlify.app/' target="_blank" >View</a>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Github</h6>
                    <a class=" expobtn1" href='https://github.com/MISHAM-CHRIST-SHAMED-J' target="_blank">View</a>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Indeed</h6>
                    <span class="expobtn1">View</span>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">LinkedIn</h6>
                    <span class="expobtn1">view</span>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Netlify</h6>
                    <span class="expobtn1">view</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card mb-3" style={{border: "none",boxShadow:"none"}}>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-2">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-10  text-secondary">
                      MISHAM CHRIST SHAMED J
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-2">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-10  text-secondary">
                      mishamshibin2512@gmail.com
                    </div>
                  </div>
                  <hr/>
                 
                 
                  <div class="row">
                    <div class="col-sm-2">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-10  text-secondary">
                      +91 9952783460
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-2">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-10  text-secondary">
                     16/42C, Vempadivilai Road, Kadukkavilai, Kallukoottam, <br /> Kanyakumari-629802
                    </div>
                  </div>
                 
                 
                </div>
              </div>
<br />
              <div class="row gutters-sm ">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100" style={{border: "none",boxShadow:"none"}}>
                    <div class="card-body">
                      <h4 class=" align-items-center text-secondary text-center mb-3">FontEnd Skill</h4><br />
                      <h6><img className='svgimg' src={react}/>&nbsp;REACT</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class=" progress-bar progress-bar-striped bg-success active " role="progressbar" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={jss}/>&nbsp;JAVASCRIPT</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "70%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={html}/>&nbsp;HTML</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "85%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={css}/>&nbsp;CSS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "75%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={boot}/>&nbsp;BOOTSTRAP</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                      <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "60%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100" style={{border: "none",boxShadow:"none"}}>
                    <div class="card-body">
                      <h4 class=" align-items-center text-secondary text-center mb-3">BackEnd Skill</h4><br />
                      <h6 class=""><img className='svgimg' src={node}/>&nbsp;NODE JS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={js}/>&nbsp;EXPRESS JS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "70%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={sqll}/>&nbsp;MYSQL</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "60%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={svg}/>&nbsp;MONGODB</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "75%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6><img className='svgimg' src={api}/>&nbsp;BACKEND API</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar progress-bar-striped bg-success active" role="progressbar" style={{width: "80%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
        <div className='d-flex  justify-content-center p-5 w-100'>
    <div class="col-lg-5  justify-content-center">
      <div class="row">
        <div class="col-lg-4  form-group">
          <input class="form-control" id="name" name="name" required placeholder="Name" type="text" /><br />
        </div>
        <div class="col-lg-4 form-group">
          <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text" required/><br />
        </div>
        <div class="col-lg-4 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/><br />
        </div>
      </div>
      <div class="form-group">
      <textarea class="form-control" id="comments" name="comments" placeholder="Message" rows="5"></textarea><br />
      </div>
      <div class="row">
        <div class="col-sm-12 form-group text-center">
          <button class=" expobtn pull-right" type="submit">Send</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact