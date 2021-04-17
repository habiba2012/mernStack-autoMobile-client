import './App.css';
import { createContext, useState } from "react";
import PrivateRoute from "./components/Pages/NotFound";
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addBooking">
            <BookingService />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/addServices">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <AddReview />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
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
    </UserContext.Provider>
  );
}

export default App;
