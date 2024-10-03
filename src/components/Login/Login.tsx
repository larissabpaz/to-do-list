import React from 'react';
import { Typography, TextField, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

export default function Login() {
    return (
        <Container maxWidth="sm">
          <Box sx={{ mt: 5 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Login
            </Typography>
            <TextField fullWidth label="Email" type="email" margin="normal" />
            <TextField fullWidth label="Senha" type="password" margin="normal" />
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Entrar
            </Button>
          </Box>
        </Container>
      );
}