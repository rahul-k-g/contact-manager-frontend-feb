import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Component/Contacts/Contacts';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import ProRoutes from './ProtectedRoutes/routes';




function App() {

  return (
    <>
   
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SignIn/>} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/register' element={<SignUp />} />
              <Route element={<ProRoutes/>}></Route>
              <Route path='/dashBoard' element={<Contacts/>} />
             
            </Routes>
          </BrowserRouter>
   
    </>
  );
}

export default App;