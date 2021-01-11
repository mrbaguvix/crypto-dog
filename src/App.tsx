import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Home from './pages/Home';

function App() {
  return (
    <>
    <CssBaseline />
        <Container maxWidth="sm">
        <Typography gutterBottom={true} variant="h4" style={{marginTop:20}}>
          CryptoDog
        </Typography>
        
        <Typography variant="h6" color="textPrimary">
          Cryptocurrency assets monitor for BTC, ETH, LTC exchanges.
        </Typography>
        </Container>
        <Divider />
        <Home/>
    
    </>
  );
}

export default App;
