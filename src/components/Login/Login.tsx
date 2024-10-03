import React, { useState } from 'react';
import { Typography, TextField, Button, Card, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import { GoogleIcon, PlaylistAddCheckIcon } from '../Icons/CustomIcons';
import ForgotPassword from './ForgotPassword';

export default function Login() {
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (emailError || passwordError) {
        event.preventDefault();
        return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Por favor digite um e-mail válido.');
        isValid = false;
        } else {
        setEmailError(false);
        setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage('A senha deve conter pelo menos 6 dígitos');
        isValid = false;
        } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <Container 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxHeight: '100%',
                overflowY: 'auto',
                marginTop: '5%',
                marginBottom: '5%',
                maxWidth: '90%',
            }}
        >
            <Card variant="outlined" sx={{ padding: 4, maxWidth: '90%', minWidth: 300 }}>
                <Typography color="primary" sx={{ width: '100%', fontSize: '24px' }}>
                    <PlaylistAddCheckIcon/>
                    Acesse Seu Gerenciador de Tarefas
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                    }}
                >
                    <FormControl>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                        sx={{ ariaLabel: 'email' }}
                    />
                    </FormControl>
                    <FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FormLabel htmlFor="password">Senha</FormLabel>
                        <Link
                        component="button"
                        type="button"
                        onClick={handleClickOpen}
                        variant="body2"
                        sx={{ alignSelf: 'baseline' }}
                        >
                        Esqueceu sua senha?
                        </Link>
                    </Box>
                    <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        placeholder="••••••"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? 'error' : 'primary'}
                    />
                    </FormControl>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Lembrar"
                    />
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
                    >
                    Acessar
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                    Você ainda não possui uma conta?{' '}
                    <span>
                        <Link
                        href="/cadastrar"
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                        >
                        Cadastre-se
                        </Link>
                    </span>
                    </Typography>
                </Box>
                <Divider>ou</Divider>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => alert('Entrar com Google')}
                    startIcon={<GoogleIcon />}
                    >
                    Entre com sua conta Google
                    </Button>
                </Box>
            </Card>
        </Container>
    );
}