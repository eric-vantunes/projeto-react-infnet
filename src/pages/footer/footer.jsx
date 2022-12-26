import { Container, Grid, Box, Link } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 6 }}
                py={{ xs: 3, sm: 6 }}
                bgcolor="#0C375F"
                color="#fff"
            >
                <Container maxWidth='sm'>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={8}>
                            <Box>Help</Box>
                            <Box>
                                <Link href="/pagina-nao-encontrada" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/pagina-nao-encontrada" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/pagina-nao-encontrada" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <Box>Conta</Box>
                            <Box>
                                <Link href="/cadastro" color="inherit">
                                    Cadastro
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 10 }}>
                        <Link href='/home' color='inherit'>
                            Sua loja virtual &reg;
                        </Link>
                        {' '+ new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer