import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button, Box } from "@mui/material"
import IProdutores from "../../interface/IProdutores"
import { useState, useEffect } from "react"
import http from "../../http"

import { Link as RouterLink } from 'react-router-dom'

const AdministracaoProdutores = () => {

    const [produtores, setProdutores] = useState<IProdutores[]>([])

    useEffect(() => {
        http.get<IProdutores[]>('produtor/')
            .then(resposta => setProdutores(resposta.data))
    }, [])

    const excluir = (produtorAhSerExcluido: IProdutores) => {
        http.delete(`produtor/${produtorAhSerExcluido.id}/`)
            .then(() => {
                const listaProdutor = produtores.filter(produtor => produtor.id !== produtorAhSerExcluido.id)
                setProdutores([...listaProdutor])
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
                                Nome
                            </TableCell>
                            <TableCell>
                                Endereço
                            </TableCell>
                            <TableCell>
                                CPF
                            </TableCell>
                            <TableCell>
                                Telefone
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {produtores.map(produtor =>
                            <TableRow key={produtor.id}>
                                <TableCell>
                                    {produtor.nome}
                                </TableCell>
                                <TableCell>
                                    {produtor.endereco}
                                </TableCell>
                                <TableCell>
                                    {produtor.cpf}
                                </TableCell>
                                <TableCell>
                                    {produtor.telefone}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => excluir(produtor)}>
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

export default AdministracaoProdutores