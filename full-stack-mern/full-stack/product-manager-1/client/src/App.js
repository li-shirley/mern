import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import { Link } from 'react-router-dom';
    
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Product Manager</h1>
        <Link to="/products">Products</Link>
      </div>
      <Switch>
        <Route exact path="/products">
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <Details />
        </Route>
        <Route exact path="/products/:id/edit">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;

