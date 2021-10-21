import { ContainerValues,InputContainer,StyledButton,StyledHeader, StyledInput } from "./sharedStyled/styledcomponents"

export default function Output(){

    return(
        <ContainerValues>
            <StyledHeader>
                <h1 style={{marginLeft:"24px"}}>Nova saída</h1>
            </StyledHeader>
            <InputContainer>
                <StyledInput placeholder="Valor"></StyledInput>
                <StyledInput placeholder="Descrição"></StyledInput>
                <StyledButton>Salvar Saída</StyledButton>
            </InputContainer>
        </ContainerValues>
    )
}