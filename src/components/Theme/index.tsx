import { Children, ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';
import NavBar from '../NavBar';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <NavBar/>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>

                        <SidebarItem
                            title="Produtor"
                            description="Identificação"
                            icon="profile"
                            path='/'
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Negociação"
                            description="Compras ou vendas?"
                            icon="book"
                            path='/step2'
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path='/step3'
                            active={state.currentStep === 3}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}