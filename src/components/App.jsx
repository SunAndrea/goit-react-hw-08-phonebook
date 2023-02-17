import { Route, Routes, Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import RegisterForm from './RegisterForm/RegisterForm';
import ContactPage from 'pages/ContactPage';
import LogInForm from './LogInForm/LogInForm';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { fetchCurrentUser } from 'auth/auth-operations';
import { getIsLoggedIn } from 'auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Routes>
          <Route
            path="/"
            element={
              <h2 style={{ display: 'flex', justifyContent: 'center' }}>
                Welcome to phonebook App
              </h2>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInForm />}
              />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
};
