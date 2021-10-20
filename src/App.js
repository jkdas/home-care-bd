
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Blogs from './Component/Blogs/Blogs';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MoreDetails from './Component/MoreDetails/MoreDetails';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:sid">
              <MoreDetails></MoreDetails>
            </PrivateRoute>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
