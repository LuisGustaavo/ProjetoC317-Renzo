import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
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

    return (<form onSubmit={aoSubmeterForm}>
        <TextField value={nomeProduto} 
            onChange={ evento => setNomeProduto(evento.target.value)} 
            label="Nome" 
            variant="standard"/>
        <TextField value={variedadeProduto} 
            onChange={ evento => setVariedadeProduto(evento.target.value)} 
            label="Variedade" 
            variant="standard"/>
        <TextField value={qualidadeProduto} 
            onChange={ evento => setQualidadeProduto(evento.target.value)} 
            label="Qualidade" 
            variant="standard"/>
        <Button type="submit" variant="outlined">Cadastrar</Button>
    </form>)
}

export default FormularioProdutos