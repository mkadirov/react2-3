
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import Welcome from './pages/Welcome/Welcome';
import Orders from './pages/Orders/Orders';
import GlobalStyle from './Style/GlobalStyle';
import Biglogo from './pages/Biglogo/Biglogo';
import Add from './pages/Add/Add';
import Category from './pages/Category/Category';
import Food from './pages/Food/Food';
import { useState } from 'react';
import Deliverd from './pages/Delivered/Delivered';
import Users from './pages/Users/Users';
import Foods from './pages/Foods/Foods';
import HomePage from './pages/HomePage/HomePage';
import Page404 from './pages/Page404/Page404';
import store from './redux/store';




function App() {
  
  const [isLogin, setLogin] = useState(false)
  return (
    
    <>
    <Provider store={store} >
      
    <GlobalStyle/>
    <Router>
        <Routes>
           <Route path='/' element = {<HomePage setLogin = {setLogin}/>}/>
           {
            isLogin && <Route path='/dashbord' element={<Welcome setLogin = {setLogin}/>}>
            <Route path='orders/*' element= {<Orders/>}/>
            <Route path='delivered' element= {<Deliverd/>}/>

            <Route path='add' element={<Add/>}>
              <Route path='category' element= {<Category/>}/>
              <Route path='food' element= {<Food/>}/>
            </Route>
         
            <Route path='users' element= {<Users/>}/>
            <Route path='foods' element= {<Foods/>}/>

          </Route>
           }
           <Route path='*' element = {<Page404/>}/>
        </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;
