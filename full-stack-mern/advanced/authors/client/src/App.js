import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreateAuthor from './views/CreateAuthor';
import Dashboard from './views/Dashboard';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/authors/new">
            <CreateAuthor />
          </Route>
          <Route exact path="/authors/edit/:id">
            <EditAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
