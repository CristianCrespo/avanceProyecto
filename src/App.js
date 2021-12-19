import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import {BrowserRouter as  Route, Switch} from 'react-router-dom';
import React from 'react';
import PublicRoute from './routes/PublicRoute'; 
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import MisRutas from './MisRutas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContex';
import {AuthContext} from './context/AuthContext';


function App() {

  const {isAuthenticated} = React.useContext(AuthContext)   

  const isAuth = isAuthenticated();

  return (
    <div className="body ">
      <CartContextProvider>
        <Route>
        <div className="container border rounded">
          <Header/>

          <Switch>
            <PublicRoute
              path="/login"
              isAuthenticated={isAuth}
            >
              <Login />
            </PublicRoute>

            <PublicRoute
              path="/register"
              isAuthenticated={isAuth}
            >
              <Register />
            </PublicRoute>

            <PrivateRoute
              path="/"
              isAuthenticated={isAuth}
            > 
              <MisRutas/>   
              </PrivateRoute >
          </Switch>

          <Footer/>
        </div>
        </Route>
      </CartContextProvider>
    </div>
  );
}
export default App;
