import Home from './components/Home';
import Value from './components/Value';

import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:value/:textColor?/:bgColor?">
          <Value />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
