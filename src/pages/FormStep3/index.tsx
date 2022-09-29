import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.email !== '' && state.produto !== '') {
            console.log(state);
        }else{
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.SetEmail,
            payload: e.target.value
        })
    }
    const handleProdutoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProduto,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Combinado! {state.name}, qual seu email e o que esta procurando/oferecendo ?</h1>
                <p>Preencha o campo abaixo.</p>

                <hr />

                <label>
                    Qual seu email?
                    <input
                        type="email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu produto?
                    <input
                        type="url"
                        autoFocus
                        value={state.produto}
                        onChange={handleProdutoChange}
                    />
                </label>

                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}