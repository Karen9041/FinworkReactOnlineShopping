import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AllProducts" component={AllProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
