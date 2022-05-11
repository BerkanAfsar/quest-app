import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import User from './components/User/User';
import NavBar from './components/NavBar/NavBar';

function App() { // ilk açıldığında Home component ına gidecek o şekilde route işlemi yapıyor
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
