import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material"
import IProdutores from "../../interface/IProdutores"
import {useState, useEffect} from "react"
import axios from "axios"
import * as C from './styles';

export const ListaProdutores = () => {
    
    const [produtores, setProdutores] = useState<IProdutores[]>([])

    useEffect(() => {
        axios.get<IProdutores[]>('http://localhost:8000/produtor/')
        .then(resposta => setProdutores(resposta.data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Produtores
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
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default ListaProdutores