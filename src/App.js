import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'


import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AllProducts" component={AllProducts} />
          <Route path="/admin/feed-products" component={Feed} />
          <Route path="/Product/:category/:productId" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
