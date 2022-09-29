import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { truncate } from 'fs';


export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados")
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.SetName,
            payload: e.target.value
        })
    }
    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name} - O que voce deseja em nosso site?</h1>
                <p>Escolha a primeira opção para vender ou a segunda para comprar</p>

                <hr />

                <SelectOption
                    title="Sou vendedor"
                    description="Estou interessado em vender alguns produtos"
                    icon="💲"
                    selected={state.estado === 0}
                />
                <SelectOption
                    title="Sou comprador"
                    description="Estou interessado em comprar alguns produtos"
                    icon="💸"
                    selected={state.estado === 1}
                />

                <Link to = "/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}