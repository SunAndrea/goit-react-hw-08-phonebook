import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Container, TextField, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { register } from 'auth/auth-operations';
// import { AiOutlineEye } from 'react-icons/ai';
import css from './RegisterForm.module.css';
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const credentials = {
      name: evt.currentTarget.name.value,
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    dispatch(register(credentials));
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
      <h2>Registration</h2>
      <form onSubmit={onSubmit} className={css.form}>
        <TextField
          name="name"
          sx={{ marginTop: '10px', width: '100%' }}
          id="outlined-basic"
          label="Enter your name"
          size="normal"
          variant="outlined"
        />
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

        <Button type="submit" variant="contained" size="large" color="success">
          Registration
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
