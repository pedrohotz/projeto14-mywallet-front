import { ContainerValues,InputContainer,StyledButton,StyledHeader, StyledInput } from "./sharedStyled/styledcomponents"

export default function Entry(){

    return(
        <ContainerValues>
            <StyledHeader>
                <h1 style={{marginLeft:"24px"}}>Nova entrada</h1>
            </StyledHeader>
            <InputContainer>
                <StyledInput placeholder="Valor"></StyledInput>
                <StyledInput placeholder="Descrição"></StyledInput>
                <StyledButton>Salvar Entrada</StyledButton>
            </InputContainer>
        </ContainerValues>
    )
}