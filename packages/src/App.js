// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NaviBar from './Components/NaviBar';
import GoldDesc from './Pages/golddes';
import SilverDesc from './Pages/silverdes';
import Admpackage from './Pages/adminSub';
import  PackageDetail  from './Pages/PackageDetails';
import PlatDesc from './Pages/platinumdesc';
import  ServiceProviderProfile  from './Pages/profile';
import PaymentPage from './Pages/paymentpage';
import AdminNav from './Components/adminNav';

// import PaymentPage from './Components/paymentpage';
// import Counter from './Trial/counter';


function App() {
  return (
    <>
    {/* <NaviBar/> */}
    <Routes>
       <Route path='/' element = {<PackageDetail/>} />
       <Route path='profile' element = {<ServiceProviderProfile/>} />
       <Route path='package-desc-platinum'  element = {<PlatDesc/>} />
       <Route path='package-desc-gold'  element = {<GoldDesc/>} />
       <Route path='package-desc-silver'  element = {<SilverDesc />} />
       <Route path='payment' element = {<PaymentPage/>}/>
       <Route path='admin-sub' element = {<Admpackage/>}/>
       <Route path='admin-work' element = {<AdminNav/>}/>
       </Routes>
     {/* <Footer/> */}
    </>
     
   );
}

export default App;
