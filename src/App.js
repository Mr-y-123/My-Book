import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import About from "./containers/About";
import SignUp from "./containers/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./containers/MyOrder";
import Admin from "./admin/Admin";
const Home=React.lazy(()=>import('./containers/Home'))

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<React.Suspense fallback={<>Loading...</>}>
              <Home/>
            </React.Suspense>}></Route>
          
          <Route path="/MyOrder" element={<MyOrder />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
