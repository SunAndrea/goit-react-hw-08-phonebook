import { Container } from '@mui/material';

import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';

const Header = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
        background: '#d7e360',
        maxWidth: { lg: '100%' },
        margin: '0px',
      }}
    >
      <Navigation />
      <AuthNav />
    </Container>
  );
};

export default Header;
