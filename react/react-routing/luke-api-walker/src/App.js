import People from './components/People'
import Form from './components/Form'
import Planets from './components/Planets'
import Films from './components/Films'
import NotFound from './components/NotFound'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="container w-80 shadow p-3 mb-5 bg-body rounded">
      <BrowserRouter>
        <Form />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/people/:id">
              <People /> 
          </Route>
          <Route path="/planets/:id">
              <Planets /> 
          </Route>
          <Route path="/films/:id">
              <Films /> 
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
