import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import NavBar from "../../components/NavBar";
import AdministracaoProdutos from "../Produtos";
import * as C from './styles';

const FormularioProdutos = () => {

    const [nomeProduto, setNomeProduto] = useState('')
    const [variedadeProduto, setVariedadeProduto] = useState('')
    const [qualidadeProduto, setQualidadeProduto] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post('http://localhost:8000/produto/', {
            nome: nomeProduto,
            variedade: variedadeProduto,
            qualidade: qualidadeProduto

        }).then(() => {
            alert("Produto Adicionado")
        })
    }

    return (
        <C.Container>
            <NavBar></NavBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box
                    component='form'
                    onSubmit={aoSubmeterForm}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', 
                        borderStyle: 'outset',
                        padding: 3,
                        width: "50%",
                        marginTop: 5,

                    }}>
                    <Typography component="h1" variant="h6" sx={{color: 'black',textAlign: "center"}}> Formulário Produtos</Typography>
                    <TextField value={nomeProduto}
                        onChange={evento => setNomeProduto(evento.target.value)}
                        label="Produto"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField value={variedadeProduto}
                        sx={{color: 'white'}}
                        onChange={evento => setVariedadeProduto(evento.target.value)}
                        label="Variedade"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField value={qualidadeProduto}
                        sx={{color: 'white'}}
                        onChange={evento => setQualidadeProduto(evento.target.value)}
                        label="Qualidade"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="outlined" sx={{ marginTop: 2,marginBottom: 2 ,backgroundColor: 'white'}}>Adicionar</Button>
                </Box>
            </Box>
            <AdministracaoProdutos></AdministracaoProdutos>
        </C.Container>)
}

export default FormularioProdutos