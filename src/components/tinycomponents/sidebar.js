import React, { useState, useContext , useEffect } from "react";
import Sidebar from "react-sidebar";
import { CartContext } from "../../cartcontext";
import { SidebarContext } from "../../sidebarcontext";

import { Row, Col } from "reactstrap";
import { DetailbarContext } from "../../detailbarcontext";
import {ModelCarrierContext} from "../../modelcontext";


const axios = require('axios');

function SidebarBag() {
 
  const [sidebar, setSidebar] = useContext(SidebarContext);
 

  // function SetSidebarOpen(open) {
  //     setSidebar(open)
  // }
  

  return (
    <Sidebar
      sidebar={
        <div>
          <button
            onClick={() => setSidebar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span> Back
          </button>

          <hr />
          <InsideSidebar />
        </div>
      }
      pullRight={true}
      open={sidebar}
      styles={{
        sidebar: {
          background: "rgba(55, 3, 60, 0.79)",
          position: "fixed",
         
          padding: "0px 0px",
          width: "30%",
          color: "white",
        },
      }}
    >
      {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
          Open sidebar
        </button>  */}
    </Sidebar>
  );
}

function InsideSidebar() {
 return(
   <h1>your shopping cart is empty</h1>
 )

}










export function Detailbar() {
  const [detailbar, setDetailbar] = useContext(DetailbarContext);

  // function SetSidebarOpen(open) {
  //     setSidebar(open)
  // }
console.log()
  return (
    <Sidebar
      sidebar={
        <div>
          <button
            onClick={() => setDetailbar(false)}
            className="m-3 btn btn-bag btn-primary "
          >
            <span className="fas fa-chevron-left"></span> Back
          </button>

          <hr />
          <InsideDetailbar />
        </div>
      }
     
      open={detailbar}
      styles={{
        sidebar: {
          background: "rgba(31, 31, 31, 0.87)",
          position: "fixed",
         
          padding: "0px 0px",
          width: "100%",
          color: "white",
        },
      }}
    >
      {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
          Open sidebar
        </button>  */}
    </Sidebar>
  );
}

function InsideDetailbar() {
  const server = "http://localhost:1337";
  const [modelCarrier , setModelCarrier] = useContext(ModelCarrierContext);
  let [loading , setLoading] = useState(true);
  let pictures = "";
  const images =  modelCarrier.images;
  let imagesToRender = [""];


  if(modelCarrier.gender ==2 || modelCarrier.gender == 1) {
    images.map( image => console.log(image.formats.small.url));

imagesToRender = images.map( image => (
  <div class="mb-3 pics all 2 animation">
        <a data-toggle="modal" data-target="#basicExampleModal">
          <img class="img-fluid z-depth-1 rounded" src={server + image.formats.small.url} alt="Card image cap"/>
        </a>
      </div>
) , () => {
      setLoading(false);
  } );

  
  
}


console.log("g yeh images ka maal tyar hwa hai" ,imagesToRender)
 

  



 

  return (
    <React.Fragment>
     <h1 className="text-center">{modelCarrier.firstName}</h1>


<div className="container">
     {/* pasted starts */}
     <section>
    
    
    
		<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body p-0">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						
						<div class="row">
						
							<div class="col-md-6 py-5 pl-5">
								
								<h5 class="font-weight-normal mb-3">Paper cup mockup</h5>

								<p class="text-muted">Key letters, explain which writing we he carpeting or fame, the itch expand medical amped through constructing time. And scarfs, gain, get showed accounts decades.</p>

								<ul class="list-unstyled font-small mt-5">
									<li>
										<p class="text-uppercase mb-2"><strong>Client</strong></p>
										<p class="text-muted mb-4">Envato Inc.</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Date</strong></p>
										<p class="text-muted mb-4">June 27, 2019</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Skills</strong></p>
										<p class="text-muted mb-4">Design, HTML, CSS, Javascript</p>
									</li>

									<li>
										<p class="text-uppercase mb-2"><strong>Address</strong></p>
										<a href="https://mdbootstrap.com/docs/jquery/design-blocks/">MDBootstrap</a>
									</li>
								</ul>
								
							</div>
						
							<div class="col-md-6">
								
								<div class="view rounded-right">
									<img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg" alt="Sample image"/>
								</div>
								
							</div>
						
						</div>
					
						
					</div>
				</div>
			</div>
		</div>

    <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">portfolio</h6>
   
    <hr class="w-header my-4"/>
    <p class="lead text-center text-muted pt-2 mb-5">I am a model and this is a dummy text about myself</p>

    <div class="row">

      <div class="col-md-12 dark-grey-text d-flex justify-content-around mb-5 text-white">
  <p>Height:{modelCarrier.height}cm</p>
            <p>Chest:{modelCarrier.chest}cm</p>
            <p>Waist:{modelCarrier.waist}cm</p>
            <p>Hips:{modelCarrier.hips}cm</p>
  <p>Dress:{modelCarrier.dress}</p>
            <p>Shoes:{modelCarrier.dress}</p>
            <p>Hair Color:{modelCarrier.hairColor}</p>
            <p>eye Color:{modelCarrier.eyeColor}</p>
            <p>Pronouns:{modelCarrier.pronoun}</p>
       

      </div>

    </div>

    <div class="gallery mb-5" id="gallery">

     {imagesToRender}




     

     

    </div>
    

  </section>
     {/* pasted ends */}
     </div>
    </React.Fragment>
  );
}



export default SidebarBag;
