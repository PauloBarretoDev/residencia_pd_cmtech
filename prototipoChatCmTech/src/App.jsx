import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function App() {
  return(
    <div className="App">
        <center>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
        <TextField id="Login" label="Digite seu login" variant="outlined" placeholder="Digite seu login"/>
        <br></br>
        <TextField  id="Senha" label="Digite sua senha" type="password" variant="outlined"placeholder="Digite sua Senha"/>
        <br></br>
        <Link href="http://www.google.com" underline="none">{'Esqueci minha senha'}</Link>
        <br></br>
        <Button variant="contained" color='secondary' > Login </Button>
        </Box>
        </center>
    </div>
  )
}

export default App
