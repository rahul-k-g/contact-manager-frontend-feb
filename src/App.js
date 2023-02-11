import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Component/Contacts/Contacts';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import ProRoutes from './ProtectedRoutes/routes';
import Contacts from './Component/Contacts/Contacts';



function App() {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SignIn/>} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/register' element={<SignUp />} />
<<<<<<< HEAD
              <Route element={<ProRoutes />}></Route>
              <Route path='/dashboard' element={<Contacts />} />
=======
              <Route element={<ProRoutes/>}></Route>
              <Route path='/dashBoard' element={<Contacts/>} />
             
>>>>>>> 3de49968e8d00d8aaff55f56a89a37db2f3ce511
            </Routes>
          </BrowserRouter>
   
    </> 
  );
}

export default App;