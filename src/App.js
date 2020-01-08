import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

//redux
import { useDispatch } from 'react-redux';
import { fetchMovies, getLocal } from './redux/allAction';

//components
import { ProtectedRoute } from './ProtectedRoute';
import Navbar from './components/navbar';
import Home from './pages/home';
import WarningDev from './pages/warningdev';
import WarningPage from './pages/warningpage';
import Registration from './pages/registration';
import MovieManagement from './pages/moviemanagement';
import TransactionHistory from './pages/transactionhistory';
import Movies from './pages/movies';
import SeatReservation from './pages/seatReservation';
import UserCart from './pages/usercart';
import UserTickets from './pages/usertickets';
import Profile from './pages/profile';

function App() {

  const dispatch = useDispatch();

  dispatch(fetchMovies());
  dispatch(getLocal());


  return (
    <Router>
      <div className="App-container">
        <Navbar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={Registration} />
            <ProtectedRoute exact path="/moviemanagement" component={MovieManagement} />
            <ProtectedRoute exact path="/transactionhistory" component={TransactionHistory} />
            <Route path="/movies" component={Movies} />
            <Route path="/seatreservation/id=:selected" component={SeatReservation} />
            <Route path="/usercart" component={UserCart} />
            <Route path="/usertickets" component={UserTickets} />
            <Route path="/profile" component={Profile} />
            <Route path='/warningdev' component={WarningDev} />
            <Route path='*' component={WarningPage} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}


export default App;
