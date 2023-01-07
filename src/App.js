import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/HomeMain/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import SingleFood from './Pages/SingleFood/SingleFood';



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        {/* <Route path='/login' element={<Login></Login>}></Route> */}
        {
          user ?
            <Route
              path="/login"
              element={<Navigate to="/" replace />}
            />
            :
            <Route path='/login' element={<Login></Login>}></Route>
        }
        {
          user ?
            <Route
              path="/signup"
              element={<Navigate to="/" replace />}
            />
            :
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
        }
        <Route
          path="/register"
          element={<Navigate to="/signup" replace />}
        />
        <Route path='/:food/:foodId' element={<SingleFood></SingleFood>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
