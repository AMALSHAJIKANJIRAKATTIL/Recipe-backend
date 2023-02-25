import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup/signup';
import Recipe from './pages/Recipes';
import RecipePage from './pages/RecipePage';
import SearchPage from './pages/SearchPage';
import Form from './pages/Form';
import PrivateRoute from './components/auth/PrivateRoute';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/recipes" element={<PrivateRoute Child={Recipe} />}/>
          
<Route path='/recipe/:id' exact element={<RecipePage/>}></Route>
<Route path='/search' exact element={<SearchPage/>}></Route>
<Route path='/create' exact element={<Form/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
