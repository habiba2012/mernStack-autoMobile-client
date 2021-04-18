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
import MyBookingList from './components/Pages/BookingList/BookingList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddAdmin from './components/Pages/AddAdmin/AddAdmin';
import BookingList from './components/Pages/BookingList/BookingList';
import MyBookingDetails from './components/Pages/MyBookingDetails/MyBookingDetails';

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
          <PrivateRoute path="/addServices">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/bookingList/:id">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/myBooking">
            <MyBookingDetails />
          </PrivateRoute>
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
