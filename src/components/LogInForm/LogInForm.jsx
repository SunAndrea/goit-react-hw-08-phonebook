import { useDispatch } from 'react-redux';
import { Container, TextField, Button } from '@mui/material';
import { logIn } from 'auth/auth-operations';
import css from './LogInForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const credentials = {
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    dispatch(logIn(credentials));
    evt.currentTarget.reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>Log In</h2>

      <form onSubmit={onSubmit} className={css.form}>
        <TextField
          name="email"
          sx={{ marginTop: '10px' }}
          id="outlined-basic"
          label="Enter your email"
          size="normal"
          variant="outlined"
        />
        <TextField
          name="password"
          sx={{ marginTop: '10px', marginBottom: '10px' }}
          id="outlined-basic"
          label="Enter your password"
          size="normal"
          variant="outlined"
          type="password"
        />
        <Button type="submit" variant="contained" color="success">
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LogInForm;
