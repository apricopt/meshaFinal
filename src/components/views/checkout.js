import React , {useContext} from 'react';
import {SidebarContext} from '../../sidebarcontext';



function Checkout() {

  const [sidebar , setSidebar] = useContext(SidebarContext);


  setSidebar(false);


return (
    <React.Fragment>
        
      <div className="container my-5 py-5 z-depth-1">
        {/*Section: Content*/}
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
              <h3 className="font-weight-bold">Complete the form to continue:</h3>
              <div className="productManji">

              </div>



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
                    <input type="text" id="form-first-name" className="form-control" />
                    <label htmlFor="form-first-name">First name</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  {/* Material outline input */}
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="form-last-name" className="form-control" />
                    <label htmlFor="form-last-name">Last name</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/* Material outline input */}
              <div className="md-form md-outline mt-3">
                <input type="email" id="form-email" className="form-control" />
                <label htmlFor="form-email">E-mail</label>
              </div>
               {/* Material outline input */}
               <div className="md-form md-outline">
                <input type="text" id="form-address" className="form-control" />
                <label htmlFor="form-subject">Contact Number:</label>
              </div>
              {/* Material outline input */}
              <div className="md-form md-outline">
                <input type="text" id="form-address" className="form-control" />
                <label htmlFor="form-subject">Address:</label>
              </div>
              
              {/*Material textarea*/}

              <div className="md-form md-outline">
                <input type="" id="form-address" className="form-control" />
                <label htmlFor="form-subject">Cardholder Name:</label>
                <input type="" id="form-address" className="form-control" />
                <label htmlFor="form-subject">Card Number:</label>
                <input type="" id="form-address" className="form-control" />
                <label htmlFor="form-subject">Expiry Date:</label>
                <input type="" id="form-address" className="form-control" />
                <label htmlFor="form-subject">CV:</label>
              </div>
              <button type="submit" className="btn btn-info btn-sm ml-0">Pay-now<i className=" ml-2" /></button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </section>
        {/*Section: Content*/}
      </div>


</React.Fragment>
)

}




export default Checkout;