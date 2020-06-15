import React , {useState} from 'react';
import {Alert } from 'reactstrap';


const axios = require('axios');
const server= "http://localhost:1337";



function Contact() {


    return (
      <div  className="container my-5 py-5 z-depth-1" style={{background:"#cea9ce", borderRadius:"267px 6px 0px 52px"}}>
      {/*Section: Content*/}
      <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
       
        <hr className="my-5" />
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
            <h4 className="font-weight-bold">Call or email</h4>
            <p className="text-muted mb-4">For any type of queries contact us we will be willing to help.</p>
            <p className="font-weight-bold text-purple">CEO Amir</p>
            <p className="mb-2">7604120990</p>
            <p className="font-weight-bold text-purple">Sobia Khan ( Fashion Designer )</p>
            <p className="mb-2">0000000000</p>
            <hr/>
            <p className="mb-2"><a href="#">Contact sales</a></p>
            <p className="mb-4">Our sales team is available by phone or email from 11am to 11pm.</p>
            <p className="mb-2">+ 000 000 000 </p>
            <p className="font-weight-bold">General inquiries:</p>
            <p className="mb-2"><a href="#">info@meshafashion.com</a></p>
            <p className="font-weight-bold">Address</p>
            <p className="mb-2"><a href="#">Imperial county CA , USA </a></p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-6">
                {/* Material outline input */}
                <div className="md-form md-outline mb-0">
                  <input type="text" id="form-first-name " className="form-control input" />
                  <label htmlFor="form-first-name ">First name</label>
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6">
                {/* Material outline input */}
                <div className="md-form md-outline mb-0">
                  <input  type="text" id="form-last-name" className="input form-control" />
                  <label htmlFor="form-last-name">Last name</label>
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/* Material outline input */}
            <div className="md-form md-outline mt-3">
              <input type="text" id="form-company" className="form-control input " />
              <label htmlFor="form-company">Company name</label>
            </div>
            {/* Material outline input */}
            <div className="md-form md-outline mt-3">
              <input type="email" id="form-email" className="form-control input " />
              <label htmlFor="form-email">E-mail</label>
            </div>
            {/* Material outline input */}
            <div className="md-form md-outline mt-3">
              <input type="number" id="form-number" className="form-control input"/>
              <label htmlFor="form-number">Phone</label>
            </div>
            <select className="browser-default custom-select" style={{color: '#757575bd'}}>
              <option selected>Select department</option>
              <option value={1}>Support</option>
              <option value={2}>Sales</option>
              <option value={3}>General</option>
            </select>
            {/* Material outline input */}
            <hr/>
            <div className="md-form md-outline">
              <input type="text" id="form-subject" className="form-control input" />
              <label htmlFor="form-subject">Subject</label>
            </div>
            {/*Material textarea*/}
            <div className="md-form md-outline mb-3">
              <textarea id="form-message" className="md-textarea input form-control" rows={3} defaultValue={""} />
              <label htmlFor="form-message">How we can help?</label>
            </div>
            <button type="submit" className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2" /></button>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/*Section: Content*/}
    </div>
    )
} 


export default Contact;