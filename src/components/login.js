import { Container,StyledInput,StyledButton,StyledLink,InputContainer } from "./sharedStyled/styledcomponents"

export default function Login(){
    return(
        <Container>
            <InputContainer>
                <h1>MyWallet</h1>
                <StyledInput placeholder="E-mail"></StyledInput>
                <StyledInput placeholder="Senha"></StyledInput>
                <StyledButton>Entrar</StyledButton>
                <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
            </InputContainer>
        </Container>
    )
}


