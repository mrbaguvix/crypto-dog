import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Home from './pages/Home';

function App() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="sm">
        <Typography gutterBottom variant="h4">
          CryptoDog
        </Typography>
        <Home/>
    </Container>
    </>
  );
}

export default App;
