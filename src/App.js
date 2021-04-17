import './App.css';
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound';
import BookingService from './components/Pages/BookingService/BookingService';
import AddReview from './components/Pages/AddReview/AddReview';
import AddService from './components/Pages/AddService/AddService';
import ManageServices from './components/Pages/ManageServices/ManageServices';
import MyBookingList from './components/Pages/MyBookingList/MyBookingList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddAdmin from './components/Pages/AddAdmin/AddAdmin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/addBooking/:id">
            <BookingService />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <Route path="/addServices">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <AddAdmin />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
          </Route>
          <Route path="/bookingList/:">
            <MyBookingList />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
