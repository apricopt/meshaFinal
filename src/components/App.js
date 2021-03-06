  import React , {useContext} from 'react';
import Topnav from './tinycomponents/topnav';
import Footer from './tinycomponents/footer';
import TopHeader from './tinycomponents/topheader';

import SidebarBag from './tinycomponents/sidebar';

import Women from './views/women';
import Men from './views/men';
import Contact from './views/contact';
import About from './views/about';
import Checkout from './views/checkout'

import Login from './views/login';
import Register from './views/register';



import MainHome from './views/home'


//importing contexts


import {SidebarProvider} from '../sidebarcontext';
import {DetailbarProvider} from '../detailbarcontext';
import {CartProvider} from '../cartcontext';
import {ProductProvider , TitleProvider} from '../modelcontext';
import {LoginProvider} from '../logincontext';





//importing react-router for navigation
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

//importing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LoginContext } from '../logincontext';






function App() {
  



  return (
   
    <Router>
   <CartProvider>
      <SidebarProvider>
       
      <DetailbarProvider>
   <LoginProvider>
      <ProductProvider>
        <TitleProvider>

      <TopHeader />
     
      <Topnav />
    
       
      
      <div className="App container-fluid">
      <SidebarBag />
        
    
      <Switch> 
    
        <Route  path={"/"} exact component={MainHome} />
        <Route  path={"/women"} exact component={Women} />
        <Route  path={"/men"} exact component={Men} />
        <Route  path={"/about"} exact component={About} />
        <Route  path={"/contact"} exact component={Contact} />
        <Route  path={"/checkout"} exact component={Checkout} />
        
       
      </Switch>
   
    
  
      <Footer />
    
     
      </div>



      </TitleProvider>
      </ProductProvider>
      </LoginProvider>
    
   
     
      </DetailbarProvider>
      </SidebarProvider>
      </CartProvider>
     
    </Router>
  );
}

export default App;
