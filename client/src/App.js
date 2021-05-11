import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Movie} from "./pages/Movies"
import {Landing} from "./pages/Landing"
import {Favourites} from "./pages/favourites"
import {Generes} from "./pages/Generes"
import {Watchlist} from "./pages/favourites/watchlist"
import { Route, Switch } from 'react-router';
import Auth from './context/Authcontext';

function App() {
  return (
    <Auth>
      <Switch>
      <Route path="/" exact><Landing /></Route>
      <Route path="/home" exact><Home /></Route>
      <Route path="/movies/:id" exact><Movie /></Route>
      <Route path="/favourites" exact><Favourites /></Route>
      <Route path="/watchlist" exact><Watchlist /></Route>
      <Route path="/generes" exact><Generes /></Route>
    </Switch>
    </Auth>
    
   
  );
}

export default App;
