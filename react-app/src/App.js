import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import KennelPage from './components/kennel/KennelPage';
import { getBreedGroups } from './store/group';
import { getBreeds } from './store/breed'
import { getUserKennel } from './store/kennel';
import { getdogs } from './store/dog';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  console.log(user.id)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getBreedGroups())
      await dispatch(getBreeds())
      if(user) {
        await dispatch(getUserKennel(user.id));
        await dispatch(getdogs(user.id));
      }
      
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/:id' exact={true} >
          <KennelPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
