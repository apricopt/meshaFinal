import React from "react";

function About() {
  return (
    <div className="container my-5 z-depth-1">
    {/*Section: Content*/}
    <section className="dark-grey-text">
      <div className="row pr-lg-5">
        <div className="col-md-7 mb-4">
          <div className="view">
            <img src="https://mdbootstrap.com/img/illustrations/graphics(1).png" className="img-fluid" alt="smaple image" />
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <div>
            <h3 className="font-weight-bold mb-4">Myshafashion</h3>
            <p>A online shopping website that can be trusted on its quality and customer satisfaction.
              Based in California  provides services world wide
            </p>
            <a href="/" className="btn btn-warning btn-rounded mx-0">Start Shopping</a>
          </div>
        </div>
      </div>
    </section>
    {/*Section: Content*/}
  </div>
  );
}

export default About;
