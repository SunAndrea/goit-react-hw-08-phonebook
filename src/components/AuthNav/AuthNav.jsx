import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import styled from 'styled-components';
import { getIsLoggedIn, getUserName } from 'auth/auth-selectors';
import { logOut } from 'auth/auth-operations';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #120b3d;
  font-weight: 500;

  &.active {
    color: #a70960;
  }
`;

const AuthNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      {isLoggedIn ? (
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '15px' }}>welcome {userName}</p>
          <Button
            sx={{ color: 'red' }}
            onClick={() => dispatch(logOut())}
            type="button"
          >
            Log out
          </Button>
        </div>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </>
      )}
    </div>
  );
};

export default AuthNav;
