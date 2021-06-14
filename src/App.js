import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AllProducts" component={AllProducts} />
        <Route path="/Product/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
