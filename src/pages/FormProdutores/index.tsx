import { Box, Button, TextField, Typography } from "@mui/material"
import { style } from "@mui/system";
import axios from "axios"
import { useState } from "react"
import NavBar from "../../components/NavBar";
import AdministracaoProdutores from "../Produtores";
import * as C from './styles';
const FormularioProdutores = () => {

    const [nomeProdutor, setNomeProdutor] = useState('')
    const [enderecoProdutor, setEnderecoProdutor] = useState('')
    const [cpfProdutor, setCpfProdutor] = useState('')
    const [telefoneProdutor, setTelefoneProdutor] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post('http://localhost:8000/produtor/', {
            nome: nomeProdutor,
            endereco: enderecoProdutor,
            cpf: cpfProdutor,
            telefone: telefoneProdutor

        }).then(() => {
            alert("Produtor Cadastrado")
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
                    <Typography component="h1" variant="h6" sx={{color: 'black',textAlign: "center"}}> Formulário Produtores</Typography>
                    <TextField value={nomeProdutor}
                        onChange={evento => setNomeProdutor(evento.target.value)}
                        label="Nome"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField value={enderecoProdutor}
                        sx={{color: 'white'}}
                        onChange={evento => setEnderecoProdutor(evento.target.value)}
                        label="Endereco"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField value={cpfProdutor}
                        sx={{color: 'white'}}
                        onChange={evento => setCpfProdutor(evento.target.value)}
                        label="Cpf"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField value={telefoneProdutor}
                        sx={{color: 'white'}}
                        onChange={evento => setTelefoneProdutor(evento.target.value)}
                        label="Telefone"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="outlined" sx={{ marginTop: 2,marginBottom: 2 ,backgroundColor: 'white'}}>Cadastrar</Button>
                </Box>
            </Box>
            <AdministracaoProdutores></AdministracaoProdutores>
        </C.Container>
    )
}

export default FormularioProdutores