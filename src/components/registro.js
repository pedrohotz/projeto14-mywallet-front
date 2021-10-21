import { Container,StyledInput,StyledButton,StyledLink,InputContainer } from "./sharedStyled/styledcomponents"

export default function Register(){
    return(
        <Container>
            <InputContainer>
                <h1>MyWallet</h1>
                <StyledInput placeholder="Nome"></StyledInput>
                <StyledInput placeholder="E-mail"></StyledInput>
                <StyledInput placeholder="Senha"></StyledInput>
                <StyledInput placeholder="Confirme a senha"></StyledInput>
                <StyledButton>Cadastrar</StyledButton>
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
            </InputContainer>
        </Container>
    )
}

