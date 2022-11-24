import { BrowserRouter, Route} from 'react-router-dom';
import FormularioPedidos from './pages/FormPedidos';
import  FormularioProdutores  from './pages/FormProdutores';
import FormularioProdutos from './pages/FormProdutos';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import AdministracaoProdutos from './pages/Produtos';
import AdministracaoProdutores from './pages/Produtores'

export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={FormStep1}/>
            <Route path="/step2" component={FormStep2}/>
            <Route path="/step3" component={FormStep3}/>
            <Route path="/produtores" component={FormularioProdutores}/>
            <Route path="/produtos" component={FormularioProdutos}/>
            <Route path="/pedidos" component={FormularioPedidos}/>
        </BrowserRouter>
    );
}