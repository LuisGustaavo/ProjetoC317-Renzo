import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
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

    return (<form onSubmit={aoSubmeterForm}>
        <TextField value={nomeProdutor} 
            onChange={ evento => setNomeProdutor(evento.target.value)} 
            label="Nome" 
            variant="standard"/>
        <TextField value={enderecoProdutor} 
            onChange={ evento => setEnderecoProdutor(evento.target.value)} 
            label="Endereco" 
            variant="standard"/>
        <TextField value={cpfProdutor} 
            onChange={ evento => setCpfProdutor(evento.target.value)} 
            label="Cpf" 
            variant="standard"/>
        <TextField value={telefoneProdutor} 
            onChange={ evento => setTelefoneProdutor(evento.target.value)} 
            label="Telefone" 
            variant="standard"/>
        <Button type="submit" variant="outlined">Cadastrar</Button>
    </form>)
}

export default FormularioProdutores