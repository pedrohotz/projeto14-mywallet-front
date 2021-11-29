import { useContext } from "react";
import { useState } from "react"
import UserContext from "../contexts/usercontext";
import { sendEntry } from "../service/api";
import { ContainerValues,InputContainer,StyledButton,StyledHeader, StyledInput } from "./sharedStyled/styledcomponents"
import {AiOutlineHome} from 'react-icons/ai';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Entry(){
    const [value,setValue] = useState("");
    const [description,setDescription]= useState("");
    const { user } = useContext(UserContext);
    function enviarEntrada(event){
        event.preventDefault();
        const body = {
            value,
            description,
        }
        sendEntry(user.token,body).then((res)=>{
            Swal.fire({
                icon: "success",
                title: "Entrada enviada com sucesso",
            }) 
        }).catch(()=>{
            Swal.fire({
                icon: "error",
                title: "Falha ao enviar entrada",
            }) 
        })
        
    }
    return(
        <ContainerValues>
            <StyledHeader>
                <h1>Nova entrada</h1>
                <Link to="/home">
                    <AiOutlineHome color="white" style={{fontSize:"26px",cursor:"pointer"}}/>
                </Link>
            </StyledHeader>
            <InputContainer>
            <form onSubmit={enviarEntrada}>
                <StyledInput placeholder="Valor" type="number" required value={value} onChange={(e)=>setValue(e.target.value)}></StyledInput>
                <StyledInput placeholder="Descrição" type="text" required value={description} onChange={(e)=>setDescription(e.target.value)}></StyledInput>
                <StyledButton type="submit">Salvar Entrada</StyledButton>
            </form>
            </InputContainer>
        </ContainerValues>
    )
}