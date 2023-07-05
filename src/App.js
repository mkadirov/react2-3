
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
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
import getUserList from './data/Users';
import Foods from './pages/Foods/Foods';
import getFoodListData from './data/FoodListData';
import HomePage from './pages/HomePage/HomePage';


function App() {
  const  foodListdata = getFoodListData();
  const list = getUserList();
  const [categoryList, setCategoryList] = useState(["Milliy Taomlar", "Turk taomlari"])
  const [foodList, setFoodList] = useState(foodListdata);
  const [users, setUsers] = useState(list);
  const [isLogin, setLogin] = useState(false)

  function changeList(v) {
    setCategoryList([...categoryList, v])
  }

  return (
    
    <>
    <GlobalStyle/>
    <Router>
        <Routes>
           <Route path='/' element = {<HomePage setLogin = {setLogin}/>}/>
           {
            isLogin && <Route path='/dashbord' element={<Welcome setLogin = {setLogin}/>}>
            <Route path='orders/*' element= {<Orders/>}/>
            <Route path='delivered' element= {<Deliverd/>}/>

            <Route path='add' element={<Add/>}>
              <Route path='category' element= {<Category 
                               categoryList= {categoryList} changeList = {changeList} />}/>
              <Route path='food' element= {<Food categoryList={categoryList} 
                               foodList= {foodList} setFoodList= {setFoodList}/>}/>
            </Route>
         
            <Route path='users' element= {<Users users = {users} setUsers = {setUsers}/>}/>
            <Route path='foods' element= {<Foods foodList = {foodList}/>}/>

          </Route>
           }
           
        </Routes>
    </Router>
    </>
  );
}

export default App;
