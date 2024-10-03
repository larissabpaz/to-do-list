import { Typography, TextField, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

export default function SignUp() {
    return (
        <Container maxWidth="sm">
          <Box sx={{ mt: 5 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Cadastre-se
            </Typography>
            <TextField fullWidth label="Nome" margin="normal" />
            <TextField fullWidth label="Email" type="email" margin="normal" />
            <TextField fullWidth label="Senha" type="password" margin="normal" />
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Cadastrar
            </Button>
          </Box>
        </Container>
      );
}