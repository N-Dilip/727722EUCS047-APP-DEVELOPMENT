import './App.css';
import { Route,Routes, } from 'react-router-dom';
import Fees from './Pages/Fees/Fees'
import PaymentPage from './Pages/Payment/Payment'
import AdmissionForm from './Pages/Admission/AdmissionForm'
import Rules from './Pages/Admission/Rules'
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Login from './Pages/Login_Signup/LoginForm';
import OpeningPage from './OpenPage/OpenPage';
import AdminLogin from './OpenPage/AdminLogin';
import Receipt from './Pages/Reciept/Receipt';
import Payment from './Pages/Fees/Payment';
import Con from './Admin_Page/components/contacts';
import MainDash from './Admin_Page/components/MainDash/MainDash';
import Reports from './Admin_Page/components/Reports';
import Profile from './Admin_Page/components/Profile';
import Analytics from './Admin_Page/components/Analytics';
import Scholarship from './Pages/Scholar/Scholar';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/fees' element={<Fees />} />
        <Route path='/admissionform' element={<AdmissionForm />} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/payments' element={<Payment/>} />
        <Route path='/rules' element={<Rules />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/settings" element={<h2>Settings</h2>} />
        <Route path='/' element={<OpeningPage />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<MainDash/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path="/con" element={<Con/>} />
        <Route path="/scholar" element={<Scholarship/>} />
      </Routes>
    </div>
  );
}

export default App;
