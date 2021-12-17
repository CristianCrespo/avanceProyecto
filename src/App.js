import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import {BrowserRouter as  Route} from 'react-router-dom';
import React from 'react';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import MisRutas from './MisRutas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContex';


function App() {
  return (
    <div className="body ">
      <CartContextProvider>
        <Route>
        <div className="container border rounded">
          <Header/>
          <MisRutas/>
          <Footer/>
        </div>
        </Route>
      </CartContextProvider>
    </div>
  );
}
export default App;
