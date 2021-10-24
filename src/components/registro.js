import { useState } from "react/cjs/react.development"
import { Container,StyledInput,StyledButton,StyledLink,InputContainer } from "./sharedStyled/styledcomponents"
import { cadastro } from "../service/api";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export default function Register(){
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [cSenha,setcSenha] = useState('');
    let history = useHistory();
    function cadastrar(){
        if(senha !== cSenha){
            Swal.fire({
                icon: "error",
                title: "Ops...",
                text: "Senhas necessitam ser iguais"
            }) 
            setcSenha("");
            return;
        }
        const body = {
            nome,
            email,
            senha
        }
        cadastro(body).then(()=>{
            Swal.fire({
                icon: "success",
                title: "Conta criada com sucesso",
            }) 
        })
        setTimeout(()=>{
            history.push('/');
        },1000);
        
    }
    return(
        <Container>
            <InputContainer>
                <h1>MyWallet</h1>
                <form onSubmit={cadastrar}>
                    <StyledInput placeholder="Nome" type="text" required value={nome} onChange={(e) => setNome(e.target.value)}></StyledInput>
                    <StyledInput placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}></StyledInput>
                    <StyledInput placeholder="Senha" type="password" required value={senha} onChange={(e) => setSenha(e.target.value)}></StyledInput>
                    <StyledInput placeholder="Confirme a senha" type="password" required value={cSenha} onChange={(e) => setcSenha(e.target.value)}></StyledInput>
                    <StyledButton type="submit">Cadastrar</StyledButton>
                </form>
                <Link to="/">
                <StyledLink>Já tem uma conta? Entre agora!</StyledLink>
                </Link>
            </InputContainer>
        </Container>
    )
}

