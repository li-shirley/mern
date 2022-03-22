import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products">
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;

