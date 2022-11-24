import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"

import { Link as RouterLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{backgroundColor: "black"}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Link component={RouterLink} to="">
                            <Button sx={{ my: 2, color: 'white' }}>
                                Home
                            </Button>
                        </Link>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/produtores">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Produtores
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/produtos">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Produtos
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/pedidos">
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Pedidos
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar