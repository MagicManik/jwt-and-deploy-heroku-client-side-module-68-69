import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import Order from './Pages/Order/Order';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>

        {/* module: 68; video: 01 */}
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}>
        </Route>


        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>
        <Route path='/manageservices' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>}>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>}>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
