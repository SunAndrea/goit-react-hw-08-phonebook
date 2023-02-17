import { useDispatch } from 'react-redux';
import { Container, TextField, Button } from '@mui/material';
import { register } from 'auth/auth-operations';
// import { AiOutlineEye } from 'react-icons/ai';
import css from './RegisterForm.module.css';
const RegisterForm = () => {
  const dispatch = useDispatch();

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
          sx={{ marginTop: '10px' }}
          id="outlined-basic"
          label="Enter your name"
          size="normal"
          variant="outlined"
        />
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
          sx={{ marginTop: '10px', marginBottom: '10px', position: 'relative' }}
          id="outlined-basic"
          label="Enter your password"
          size="normal"
          variant="outlined"
        />
        {/* <Button sx={{ position: 'absolute', bottom: '0' }}>
          <AiOutlineEye />
        </Button> */}
        <Button type="submit" variant="contained" size="large" color="success">
          Registration
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
