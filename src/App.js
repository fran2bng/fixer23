import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Register } from './Component/Register';
import { Authprovider } from './Component/contex/authContext';


export default function App() {
  return (
    <Authprovider>
    <BrowserRouter>
      <Routes>

        <Route path= "/" element= {<Home />} />
        <Route path= "/login" element= {<Login />} />
        <Route path= "/register" element= {<Register />} />

      </Routes>
    </BrowserRouter>
    </Authprovider>
  )
}