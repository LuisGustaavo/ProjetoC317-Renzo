import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import http from "../../http"
import IProdutores from "../../interface/IProdutores"
import IProdutos from "../../interface/IProdutos"
import AdministracaoPedidos from "../Pedidos"
import * as C from './styles';


const FormularioPedidos = () => {

    const [quantidadePedido, setQuantidadePedido] = useState('')
    const [valorPedido, setValorPedido] = useState('')
    const [dataPedido, setDataPedido] = useState('')
    const [produtor, setProdutor] = useState('')
    const [produto, setProduto] = useState('')

    const [produtores, setProdutores] = useState<IProdutores[]>([])
    const [produtos, setProdutos] = useState<IProdutos[]>([])

    useEffect(() => {
        http.get<IProdutores[]>('produtor/')
            .then(resposta => setProdutores(resposta.data))
        http.get<IProdutos[]>('produto/')
            .then(resposta => setProdutos(resposta.data))
    }, [])

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('quantidade', quantidadePedido)
        formData.append('valor', valorPedido)
        formData.append('data', dataPedido)

        formData.append('produtor', produtor)
        formData.append('produto', produto)

        http.request({
            url: 'pedido/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setQuantidadePedido('')
                setValorPedido('')
                setDataPedido('')
                setProdutor('')
                setProduto('')
                alert('Pedido incluido com sucesso!')
            })
            .catch(erro => console.log(erro))
    }


    return (
        <C.Container>
            <NavBar></NavBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    <Typography component="h1" variant="h6" sx={{color: 'black',textAlign: "center"}}>Adicionar Pedido</Typography>
                    <TextField
                        value={quantidadePedido}
                        onChange={evento => setQuantidadePedido(evento.target.value)}
                        label="Quantidade"
                        variant="standard"
                        fullWidth
                        required
                        margin="dense"
                    />
                    <TextField
                        value={valorPedido}
                        onChange={evento => setValorPedido(evento.target.value)}
                        label="Valor"
                        variant="standard"
                        fullWidth
                        required
                        margin="dense"
                    />
                    <FormControl margin="dense" fullWidth >
                        <InputLabel id="select-produtor">Produtores</InputLabel>
                        <Select labelId="select-produtor" value={produtor} onChange={evento => setProdutor(evento.target.value)}>
                            {produtores.map(produtor => <MenuItem key={produtor.id} value={produtor.id}>
                                {produtor.nome} {produtor.cpf}
                            </MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl margin="dense" fullWidth >
                        <InputLabel id="select-produto">Produtos</InputLabel>
                        <Select labelId="select-produto" value={produto} onChange={evento => setProduto(evento.target.value)}>
                            {produtos.map(produto => <MenuItem key={produto.id} value={produto.id}>
                                {produto.nome}
                            </MenuItem>)}
                        </Select>
                    </FormControl>
                    <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
                </Box>
            </Box>
            <AdministracaoPedidos></AdministracaoPedidos>
        </C.Container>
    )
}

export default FormularioPedidos