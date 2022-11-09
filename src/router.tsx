import { BrowserRouter, Route} from 'react-router-dom';
import  FormularioProdutores  from './pages/FormProdutores';
import FormularioProdutos from './pages/FormProdutos';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import {ListaProdutores} from './pages/Produtores';
import {ListaProdutos} from './pages/Produtos';

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={FormStep1}/>
            <Route path="/step2" component={FormStep2}/>
            <Route path="/step3" component={FormStep3}/>
            <Route path="/produtores" component={ListaProdutores}/>
            <Route path="/cadastro" component={FormularioProdutores}/>  
            <Route path="/produtos" component={ListaProdutos}/>
            <Route path="/novo_produto" component={FormularioProdutos}/>
        </BrowserRouter>
    );
}