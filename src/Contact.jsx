import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import pic from "./logo.jpg"
import sql from "./mysql.png"


function Contact() {
  return (
<div class="container-fluid">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card" style={{border: "none",boxShadow:"none"}}>
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={pic} alt="Admin" class="rounded-circle" width="180" height={180}/>
                    <div class="mt-3">
                      <h4>MISHAM J</h4>
                      <p class="text-secondary mb-1">MERN Stack Developer</p>
                      <p class="text-muted font-size-sm">Kanyakumari</p>
                      <a class="expobtn" href={sql} download> Download </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3" style={{border: "none",boxShadow:"none"}}>
                <ul class=" list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Website</h6>
                    <a class="text-secondary text-decoration-none" >Coming Soon...</a>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Github</h6>
                    <a class="text-secondary text-decoration-none" href='https://github.com/MISHAM-CHRIST-SHAMED-J' target="_blank">https://github.com/MISHAM-CHRIST-SHAMED-J</a>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">indeed</h6>
                    <span class="text-secondary">Coming Soon...</span>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">LinkedIn</h6>
                    <span class="text-secondary">Coming Soon...</span>
                  </li><br />
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Netlify</h6>
                    <span class="text-secondary">Coming Soon...</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3" style={{border: "none",boxShadow:"none"}}>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      MISHAM CHRIST SHAMED J
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      mishamshibin2512@gmail.com
                    </div>
                  </div>
                  <hr/>
                 
                 
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +91 9952783460
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     16/42C, Vempadivilai Road, Kadukkavilai, Kallukoottam, <br /> Kanyakumari-629802
                    </div>
                  </div>
                 
                 
                </div>
              </div>
<br />
              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100" style={{border: "none",boxShadow:"none"}}>
                    <div class="card-body">
                      <h6 class=" align-items-center text-center mb-3">FontEnd Skill Status</h6>
                      <h6>REACT</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "60%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>JAVASCRIPT</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "53%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>HTML</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>CSS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>BOOTSTRAP</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100" style={{border: "none",boxShadow:"none"}}>
                    <div class="card-body">
                      <h6 class=" align-items-center text-center mb-3">BackEnd Skill Status</h6>
                      <h6 class="">NODE JS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>EXPRESS JS</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>MYSQL</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>MONGODB</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>BACKEND API</h6>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar expobtn" role="progressbar" style={{width: "80%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
  )
}

export default Contact