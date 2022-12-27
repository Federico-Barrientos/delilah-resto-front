import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './containers/login/Login'
import SignIn from './containers/signin/SignIn'
import Layout from './components/Layout/Layout'
import Home from './containers/home/Home'


function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signin" element={<SignIn/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
