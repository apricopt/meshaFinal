import React ,{useState , useContext , useEffect} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ProductContext , TitleContext} from '../../modelcontext';


const axios = require('axios');


function Shopbar() {

const [product , setProduct] = useContext(ProductContext);
const [title , setTitle] = useContext(TitleContext);


      // collapse stuff starts
      const [isOpen, setIsOpen] = useState(true);
      const [isOpen2, setIsOpen2] = useState(true);

     // const toggle = () => setIsOpen(!isOpen);
     // const toggle2 = () => setIsOpen2(!isOpen2);
      // collapse stuff ends


      function shuffle(array) {

        array.sort(() => Math.random() - 0.5);
      }
  
      // shuffling function ends now
  
      useEffect(() => {
   
        axios.get("http://67.205.131.13:5002/featurings/1").then((response) => {
         let merged = response.data.menproducts.concat(response.data.womenproducts);
        shuffle(merged);
        setTitle("Our Featured Products");
        setProduct(merged);
         
          
  
  
        }).catch(err => console.log(err));
      }, []);

      // all the button functions start from here


      function womenPress() {
       setIsOpen(!isOpen)
        axios.get("http://67.205.131.13:5002/womenproducts").then((response) => {
        //  console.log("yeh aya hai response zanana" ,response);
          setProduct(response.data );  
          setTitle("Women");
        }).then(() => {
        }).catch(err => console.log("g error catch kar leya " + err));   
      }




      function menPress() {
       setIsOpen2(!isOpen2)
        // console.log("g men click hogya")
        
                axios.get("http://67.205.131.13:5002/menproducts").then((response) => {
        
                
                //  console.log("yeh aya hai response zanana" ,response.data);
                  setProduct(response.data);
                  setTitle("Men");
                 
                }).then(() => {
        
        
        
        
                }).catch(err => console.log("g error catch kar leya " + err));
        
                
              }



              function islamicPress() {
              

                //  console.log("g islamic click hogya")
                 
                         axios.get("http://67.205.131.13:5002/islamics").then((response) => {
                 
                         
                          // console.log("yeh aya hai response zanana" ,response.data);
                           setProduct(response.data);
                           setTitle("Islamic Collection");
                          
                         }).then(() => {
                 
                 
                 
                 
                         }).catch(err => console.log("g error catch kar leya " + err));
                 
                         
                       }








      function featurePress() {

        // console.log("g feature click hogya")

        axios.get("http://67.205.131.13:5002/featurings/1").then((response) => {

        
         let merged = response.data.menproducts.concat(response.data.womenproducts);
         shuffle(merged);
         
         setProduct(merged);
         setTitle("Our Featured Products");
          
         
        }).then(() => {




        }).catch(err => console.log("g error catch kar leya " + err));

        
      }

      
    






      function newArrivalPress() {

        // console.log("g arrival click hogya")

        axios.get("http://67.205.131.13:5002/featurings/1").then((response) => {

        
         let merged = response.data.menproducts.concat(response.data.womenproducts);
        
         
         setProduct(merged);
         setTitle("New Arrival");
          
         
        }).then(() => {




        }).catch(err => console.log("g error catch kar leya " + err));

        
      }





      

      function wcosmeticsPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/wcategories/1").then((response) => {

         setProduct(response.data.womenproducts);
         setTitle("Women > Cosmetics");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }


      function wclothsPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/wcategories/2").then((response) => {

         setProduct(response.data.womenproducts);
         setTitle("Women > Cloths");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }


      function wshoesPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/wcategories/3").then((response) => {

         setProduct(response.data.womenproducts);
         setTitle("Women > Shoes");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }

      function whijabPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/wcategories/4").then((response) => {

         setProduct(response.data.womenproducts);
         setTitle("Women > Hijaab");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }



      function mcasualshoesPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/mcategories/1").then((response) => {

         setProduct(response.data.menproducts);
         setTitle("Men > Sports Shoes");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }

      function mleatherPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/mcategories/2").then((response) => {

         setProduct(response.data.menproducts);
         setTitle("Men > Leather Shoes");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }


      function mclothsPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/mcategories/3").then((response) => {

         setProduct(response.data.menproducts);
         setTitle("Men > Cloths");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }

      function maccessoriesPress() {

        // console.log("g cosmetics click hogya")

        axios.get("http://67.205.131.13:5002/mcategories/4").then((response) => {

         setProduct(response.data.menproducts);
         setTitle("Men > Accessories");
            
        }).then(() => {

        }).catch(err => console.log("g error catch kar leya " + err));
        
      }
      



    return (

      

        <React.Fragment>
<div className="shopbar pt-1">

          <button className="btn btn-block m-0 btn-featured" onClick={featurePress}>Featured Products</button>
          <button className="btn btn-block btn-main" onClick={newArrivalPress}>New Arrival</button>
          {/* main btn starts */}
          <button className="btn btn-block btn-main"   onClick={womenPress}  >Women<i class="fas fa-caret-down float-right"></i></button>
      <Collapse isOpen={isOpen}  >
        <Card>
        <button className="btn btn-block btn-sub" onClick={wcosmeticsPress}>Cosmetics</button>
          <button className="btn btn-block btn-sub" onClick={wclothsPress}>Cloths</button>
          <button className="btn btn-block btn-sub" onClick={wshoesPress}>Shoes</button>
          <button className="btn btn-block btn-sub" onClick={whijabPress}>Hijab</button>
        </Card>
      </Collapse>   
        {/* main btn ends */}
         {/* main btn starts */}
         <button className="btn btn-block btn-main"   onClick={menPress} >Men<i class="fas fa-caret-down float-right"></i></button>
      <Collapse isOpen={isOpen2}  >
        <Card>
        <button className="btn btn-block btn-sub" onClick={mcasualshoesPress}>Sports Shoes</button>
          <button className="btn btn-block btn-sub" onClick={mleatherPress}>Leather Shoes</button>
          <button className="btn btn-block btn-sub" onClick={mclothsPress}>Cloths</button>
          <button className="btn btn-block btn-sub" onClick={maccessoriesPress}>Accessories</button>
        </Card>
      </Collapse>   
        {/* main btn ends */}
         
         
          {/* <button className="btn btn-block btn-main">SummerCollection</button>
          <button className="btn btn-block btn-main">Sale Products</button> */}
          <button className="btn btn-block btn-main" onClick={islamicPress}>Islamic Collection</button>


</div>




        </React.Fragment>
    )

}

export default Shopbar;