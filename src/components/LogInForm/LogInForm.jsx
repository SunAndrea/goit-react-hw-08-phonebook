import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, TextField, Button, IconButton } from '@mui/material';
import { logIn } from 'auth/auth-operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import css from './LogInForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();

    const credentials = {
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    dispatch(logIn(credentials));
    evt.currentTarget.reset();
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
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

      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          name="email"
          sx={{ marginTop: '10px', width: '100%' }}
          id="outlined-basic"
          label="Enter your email"
          size="normal"
          variant="outlined"
        />
        <TextField
          name="password"
          sx={{ marginTop: '10px', marginBottom: '10px', width: '100%' }}
          id="outlined-basic"
          label="Enter your password"
          size="normal"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <IconButton onClick={onClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="success">
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LogInForm;
