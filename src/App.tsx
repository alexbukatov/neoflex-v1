import './scss/app.scss';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Cart from './pages/Cart/index.tsx';
import FormPay from './pages/FormPay/index.tsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<FormPay />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
