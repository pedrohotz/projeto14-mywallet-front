
import './App.css';
import Login from './components/login';
import Register from './components/registro';
import Home from './components/home';
import Entry from './components/entry';
import Output from './components/output';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import UserContext from './contexts/usercontext';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
function App() {
  const [user,setUser] = useState(null);
  useEffect(()=>{
    const userData = localStorage.getItem('@user');
    if(userData){
      setUser(JSON.parse(userData));
    }
  },[]);
  console.log(user);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user,setUser}}>
          <Switch>
              <Route path="/" exact>
                  <Login/>
              </Route>
              <Route path="/sign-up" exact>
                  <Register/>
              </Route>
              <Route path="/entry" exact>
                  <Entry/>
              </Route>
              <Route path="/output" exact>
                  <Output/>
              </Route >
              <Route path="/home" exact>
                   <Home/>
              </Route>
          </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
