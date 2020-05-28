import React ,{useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



function Shopbar() {
      // collapse stuff starts
      const [isOpen, setIsOpen] = useState(false);
      const [isOpen2, setIsOpen2] = useState(false);

      const toggle = () => setIsOpen(!isOpen);
      const toggle2 = () => setIsOpen2(!isOpen2);
      // collapse stuff ends
    return (

      

        <React.Fragment>
<div className="shopbar pt-5">

          <button className="btn btn-block btn-info">Featured Products</button>
          <button className="btn btn-block btn-info">New Arrival</button>
          {/* main btn starts */}
          <button className="btn btn-block btn-info" style={{ marginBottom: '.5rem' }}  onClick={toggle}  >Women<i class="fas fa-caret-down float-right"></i></button>
      <Collapse isOpen={isOpen}  >
        <Card>
        <button className="btn btn-block btn-warning">Cosmetics</button>
          <button className="btn btn-block btn-warning">Cloths</button>
          <button className="btn btn-block btn-warning">Shoes</button>
          <button className="btn btn-block btn-warning">Hijab</button>
        </Card>
      </Collapse>   
        {/* main btn ends */}
         {/* main btn starts */}
         <button className="btn btn-block btn-info" style={{ marginBottom: '.5rem' }}  onClick={toggle2} >Men<i class="fas fa-caret-down float-right"></i></button>
      <Collapse isOpen={isOpen2}  >
        <Card>
        <button className="btn btn-block btn-warning">Casual Shoes</button>
          <button className="btn btn-block btn-warning">Leather Shoes</button>
          <button className="btn btn-block btn-warning">Cloths</button>
          <button className="btn btn-block btn-warning">Accessories</button>
        </Card>
      </Collapse>   
        {/* main btn ends */}
         
         
          <button className="btn btn-block btn-info">SummerCollection</button>
          <button className="btn btn-block btn-info">Sale Products</button>
          <button className="btn btn-block btn-info">Islamic Collection</button>


</div>




        </React.Fragment>
    )

}

export default Shopbar;