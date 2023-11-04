import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './core/components/Navbar';
 import Auth from 'pages/Auth';
// import Navbar from './core/components/Navbar';
// import Admin from './pages/Admin';
// import Catalog from './pages/Catalog';
// import ProductDetails from './pages/Catalog/components/ProductDetails';
import Footer from 'core/components/Footer';
import Home from 'pages/Home';


const Routes = () =>(
  <BrowserRouter>
    <Navbar/>
    <Switch>

    <Route path="/home" exact>
        <Home/>
      </Route>

    <Redirect from="/auth" to="/auth/login" exact/>
      <Route path="/auth">
          <Auth/>
      </Route>

    </Switch>
    {/* <Switch> */}
      
      {/* <Route path="/" exact>
      <Redirect from="/" to="/products" exact/>
        <Catalog/>
      </Route>
      
      <Route path="/products" exact>
        <Catalog/>
      </Route>
      
      <Route path="/products/:productId">
        <ProductDetails/>
      </Route>
      
      <Redirect from="/admin" to="/admin/products" exact/>
      <Route path="/admin">  
        <Admin/>
      </Route> */}

    {/* </Switch> */}
    <Footer/>
     </BrowserRouter>
);

export default Routes;