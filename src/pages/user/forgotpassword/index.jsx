import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const theme = createTheme();

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:3000/passwordResetRequests', {
      email: data.get('email'),
    })
    .then((response) => {
      console.log('Şifre sıfırlama bağlantısı gönderildi.');
    })
    .catch((error) => {
      console.error('Şifre sıfırlama sırasında bir hata oluştu:', error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Send Reset Link
            </Button>
            <Link to="/signin" variant="body2">
              Remembered your password? Sign in
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
