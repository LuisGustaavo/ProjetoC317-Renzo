import { createContext, ReactNode, useContext, useReducer } from "react";
import { NumericLiteral } from "typescript";

type State = {
    currentStep: number;
    name: string;
    estado: number;
    email: string;
    produto: string;
}
type Action = {
    type: FormActions;
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    estado: 0,
    email: '',
    produto: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
    setCurrentStep, //qual passo estou atualmente
    SetName,        //o nome do usuario
    SetEstado,      //comprador ou vendedor
    SetEmail,       //saber o email do usuario
    setProduto      //saber o que esta vendendo
}
const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.SetName:
            return { ...state, name: action.payload };
        case FormActions.SetEstado:
            return { ...state, estado: action.payload };
        case FormActions.SetEmail:
            return { ...state, email: action.payload };
        case FormActions.setProduto:
            return { ...state, produto: action.payload };
        default:
            return state;
    }
}

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}