import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function Resume() {
  return (
<div className='d-flex justify-content-center p-5'>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-sm-3 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-3 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-3 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div><br />
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
      <div class="row">
        <div class="col-sm-12 form-group text-center">
          <button class=" expobtn pull-right" type="submit">Send</button>
        </div>
      </div>
      </div>
      </div>
)}

export default Resume;
