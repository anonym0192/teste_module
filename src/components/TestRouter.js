import React from 'react';
import { BrowserRouter , Route , Switch , Link , Redirect } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Category from './Category.js';
import Login from './Login.js';

let isLogged = true;

const PrivateRoute = ({children, ...rest}) => {


    return (    
            <Route {...rest}>
                {isLogged && 
                     children
                }
                {!isLogged &&
                    <Redirect to="/login"></Redirect>
                }
               {/* (isLogged) ? children : <Redirect to="/login"/>} */}
            </Route>   
    );

};

function TestRouter(){

    const isLoggedToggle = () => {
        isLogged = (isLogged) ? false : true;
        alert("isLogged is now :"+isLogged);
    }

    

    return (
        <BrowserRouter>
            <header><h1>This is my first router</h1></header>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">About us</Link></li>
                <li><Link to="/private">Private Route</Link></li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <Home></Home>
                    <button onClick={isLoggedToggle}>Login Toggle Button</button>
                </Route>

                <Route path="/sobre">
                    <About></About>
                </Route>

                <Route path="/login">
                    <Login></Login>
                </Route>

                <PrivateRoute path="/private">
                    <h2>This is a private route page</h2>
                    <p>Congratulations you have the permission to access this page!</p>
                </PrivateRoute>

                <Route path="*">
                    <h3>404 Error</h3>
                    <p>Page not found</p>
                </Route>
                
            </Switch>

         <footer>All rights reserved 2020</footer>
      </BrowserRouter>
    );

}

    export default TestRouter;

