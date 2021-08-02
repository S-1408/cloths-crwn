import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shoppage/Shoppage';
import Header from './components/header/header';
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
