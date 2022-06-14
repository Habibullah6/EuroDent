import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
       <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:details" element={<PrivateRoute> <ServiceDetails /> </PrivateRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
