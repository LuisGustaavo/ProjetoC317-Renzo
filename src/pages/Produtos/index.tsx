import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material"
import IProdutos from "../../interface/IProdutos"
import {useState, useEffect} from "react"
import axios from "axios"

export const ListaProdutos = () => {
    
    const [produtos, setProdutos] = useState<IProdutos[]>([])

    useEffect(() => {
        axios.get<IProdutos[]>('http://localhost:8000/produto/')
        .then(resposta => setProdutos(resposta.data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Produtos
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {produtos.map(produtos => 
                        <TableRow key={produtos.id}>
                        <TableCell>
                            {produtos.nome}
                        </TableCell>
                        <TableCell>
                            {produtos.variedade}
                        </TableCell>
                        <TableCell>
                            {produtos.qualidade}
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default ListaProdutos