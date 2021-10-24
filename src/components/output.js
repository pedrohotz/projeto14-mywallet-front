import { ContainerValues,InputContainer,StyledButton,StyledHeader, StyledInput } from "./sharedStyled/styledcomponents"
import { useContext, useState } from "react";
import { sendOutput } from "../service/api";
import UserContext from "../contexts/usercontext";
import Swal from "sweetalert2";
import {AiOutlineHome} from 'react-icons/ai';
import { Link } from "react-router-dom";
export default function Output(){
    const [value,setValue] = useState("");
    const [description,setDescription]= useState("");
    const {user} = useContext(UserContext);
    function enviarSaida(event){
        event.preventDefault();
        const body = {
            value,
            description,
        }
        sendOutput(user.token,body).then((res)=>{
            Swal.fire({
                icon: "success",
                title: "Saída enviada com sucesso",
            }) 
        }).catch(()=>{
            Swal.fire({
                icon: "error",
                title: "Falha ao enviar saída",
            }) 
        })

    }
    return(
        <ContainerValues>
            <StyledHeader>
                <h1>Nova saída</h1>
                <Link to="/home">
                    <AiOutlineHome color="white" style={{fontSize:"26px",cursor:"pointer"}}/>
                </Link>
            </StyledHeader>
            <InputContainer>
            <form onSubmit={enviarSaida}>
                <StyledInput placeholder="Valor" type="number" required value={value} onChange={(e)=>setValue(e.target.value)}></StyledInput>
                <StyledInput placeholder="Descrição" type="text" required value={description} onChange={(e)=>setDescription(e.target.value)}></StyledInput>
                <StyledButton type="submit">Salvar saída</StyledButton>
            </form>
            </InputContainer>
        </ContainerValues>
    )
}