import React from "react";

function About() {
  return (
    <div>
      <div class="container my-5 z-depth-1">
        <section class="dark-grey-text">
          <div class="row pr-lg-5">
            <div class="col-md-7 mb-4">
              <div class="view">
                <img
                  src={require('../images/about.png')}
                  class="img-fluid"
                  alt="smaple image"
                />
              </div>
            </div>
            <div class="col-md-5 d-flex align-items-center">
              <div>
                <h3 class="font-weight-bold mb-4">About MeshaFashion</h3>

                <p>
                  MeshaFashion is a shopping website, founded on
                  2012.
                </p>
                <p>
                    some content here  some content here some content here some content here some content here some content here some content here some content here some content here some content here
                </p>
                <p>
                some content here some content here some content here some content here some content here some content here some content here some content here some content here some content here some content here some content here
                    <hr />
                    some content here some content here some content here some content here                
                </p>

               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
