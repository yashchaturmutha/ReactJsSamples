import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/products/:id' component={ProductInfo}/>
    <Route exact path='/cart' component={Cart}/>
    </Switch>
    </>
  );
}

export default App;
