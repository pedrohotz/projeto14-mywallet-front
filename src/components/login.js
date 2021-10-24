import { Container,StyledInput,StyledButton,StyledLink,InputContainer } from "./sharedStyled/styledcomponents"
import UserContext from "../contexts/usercontext"
import { useContext,useState,useEffect } from "react"
import { login } from "../service/api";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default function Login(){
    const {user,setUser} = useContext(UserContext);
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    let history = useHistory();
    useEffect(() =>{
        if(user){
            history.push("/home");
        }
         // eslint-disable-next-line
    },[user]);

    function logar(event){
        event.preventDefault();
        const body = {
            email,
            senha,
        }
        login(body).then(loginSucess).catch(loginFailure);
    }

    function loginSucess(response){
        setUser(response.data);
        localStorage.setItem('@user',JSON.stringify(response.data));
    }
    function loginFailure(response){
        const statusCode = response.response.status
        if(statusCode === 401){
            Swal.fire({
                icon: "error",
                title: "Ops...",
                text: "Email ou senha incorretos"
            })
        }
        else if (statusCode === 500) {
            Swal.fire({
                icon: "error",
                title: "Ops...",
                text: "Não foi possível realizar o login neste momento"
            })
        }
        else if(statusCode === 400){
            Swal.fire({
                icon: "error",
                title: "Ops...",
                text: "Campos inválidos"
            }) 
        }
    }

    return(
        <Container>
            <InputContainer>
                <h1>MyWallet</h1>
                <form onSubmit={logar}>
                    <StyledInput placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required></StyledInput>
                    <StyledInput placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)} type="password" required></StyledInput>
                    <StyledButton type="submit">Entrar</StyledButton>
                </form>
                <Link to="/sign-up" style={{textDecoration:"none"}}>
                    <StyledLink>Primeira vez? Cadastre-se!</StyledLink>
                </Link>
            </InputContainer>
        </Container>
    )
}


