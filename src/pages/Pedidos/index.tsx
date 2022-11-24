import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button, Box } from "@mui/material"
import IProdutores from "../../interface/IProdutores"
import { useState, useEffect } from "react"
import http from "../../http"

import { Link as RouterLink } from 'react-router-dom'
import IPedidos from "../../interface/IPedidos"

const AdministracaoPedidos = () => {

    const [pedidos, setPedidos] = useState<IPedidos[]>([])

    useEffect(() => {
        http.get<IPedidos[]>('pedido/')
            .then(resposta => setPedidos(resposta.data))
    }, [])

    const excluir = (produtorAhSerExcluido: IPedidos) => {
        http.delete(`produtor/${produtorAhSerExcluido.id}/`)
            .then(() => {
                const listaProdutor = pedidos.filter(pedidos => pedidos.id !== produtorAhSerExcluido.id)
                setPedidos([...listaProdutor])
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
                                Produtor
                            </TableCell>
                            <TableCell>
                                Produto
                            </TableCell>
                            <TableCell>
                                Quantidade
                            </TableCell>
                            <TableCell>
                                Valor
                            </TableCell>
                            <TableCell>
                                Total
                            </TableCell>
                            <TableCell>
                                Data
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pedidos.map(pedido =>
                            <TableRow key={pedido.id}>
                                <TableCell>
                                    {pedido.produtor}
                                </TableCell>
                                <TableCell>
                                    {pedido.produto}
                                </TableCell>
                                <TableCell>
                                    {pedido.quantidade}
                                </TableCell>
                                <TableCell>
                                    {pedido.valor}
                                </TableCell>
                                <TableCell>
                                {pedido.valor*pedido.quantidade}
                                </TableCell>
                                <TableCell>
                                    {pedido.data.slice(8,10)+'/'+pedido.data.slice(5,7)+'/'+pedido.data.slice(0,4)}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(pedido)}>
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

export default AdministracaoPedidos