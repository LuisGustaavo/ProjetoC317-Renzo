import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Box, Button } from "@mui/material"
import IProdutos from "../../interface/IProdutos"
import {useState, useEffect} from "react"
import axios from "axios"
import http from "../../http"

const AdministracaoProdutos = () => {
    
    const [produtos, setProdutos] = useState<IProdutos[]>([])

    useEffect(() => {
        http.get<IProdutos[]>('produto/')
            .then(resposta => setProdutos(resposta.data))
    }, [])

    const excluir = (produtoAhSerExcluido: IProdutos) => {
        http.delete(`produto/${produtoAhSerExcluido.id}/`)
            .then(() => {
                const listaProdutor = produtos.filter(produto => produto.id !== produtoAhSerExcluido.id)
                setProdutos([...listaProdutor])
            })
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            flexGrow: 1,
            marginTop: 2,
            marginLeft: 10,
            marginRight: 10
        }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Produto
                            </TableCell>
                            <TableCell>
                                Variedade
                            </TableCell>
                            <TableCell>
                                Qualidade
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {produtos.map(produto=>
                            <TableRow key={produto.id}>
                                <TableCell>
                                    {produto.nome}
                                </TableCell>
                                <TableCell>
                                    {produto.variedade}
                                </TableCell>
                                <TableCell>
                                    {produto.qualidade}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(produto)}>
                                        Excluir
                                    </Button>
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AdministracaoProdutos