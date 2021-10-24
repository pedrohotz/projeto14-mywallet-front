
import { ContainerWallet,StyledHeader,ContainerTransactions,ContainerButtons,ButtonTransaction,RegisterValue,StyledValue } from "./sharedStyled/styledcomponents";
import iconLogout from '../img/iconLogout.png';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai';
import { useContext } from "react";
import UserContext from "../contexts/usercontext";
import { getHistory } from "../service/api";
import { useEffect, useState } from "react/cjs/react.development";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Loading from "./shared/Loading";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
export default function Home(){
    const {user,setUser} = useContext(UserContext);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    let historico = useHistory()
    let saldo = 0;
    useEffect(() => {
        setLoading(true);
        if(user){
            setLoading(false);
            getHistory(user.token).then((res)=> {
                setHistory(res.data);
                
            })
        }  
        else{
            historico.push("/");
        }    
        // eslint-disable-next-line
    },[user])

    function calcularSaldo (){
        // eslint-disable-next-line
        history.map((element)=>{
            if(element.type === "entrada"){ 
                saldo += Number(element.value);
            }
            else if (element.type === "saida"){
                saldo -= Number(element.value);
            }
            
        })
    }
    calcularSaldo();
    function checkEntrace(type){
        if(type === "entrada"){
            return true;
        }
        else{
            return false;
        }
    }
    async function fazerLogout(){
        await Swal.fire({
            title: 'Tem certeza que deseja fazer logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
        }).then((res)=>{
            if(res.isConfirmed){
                localStorage.clear();
                setUser(null);
            }
        })
    }
    return(
        <ContainerWallet>
            {loading ? <Loading/> :
            <>
            <StyledHeader>
                {user ? <h1>Olá, {user.name}</h1> : <h1>Carregando...</h1>}
                <img src={iconLogout} alt="logoutIcon" onClick={fazerLogout} />
            </StyledHeader>
            <ContainerTransactions>
                {history.length === 0 ? <h2 className="not-found">Não há registros de entrada ou saída</h2> : 
                    
                <RegisterValue>
                    {history.map((element) => {
                        return(      
                            <div className="element">
                                <div className="date-desc">
                                    <span className="date">{dayjs(element.date).format('DD/MM')}</span>
                                    <span className="desc">{element.description}</span>
                                </div> 
                                <StyledValue entrada={checkEntrace(element.type)}>{Number(element.value).toFixed(2)}</StyledValue>
                            </div>)
                    })}
                </RegisterValue>
                }
                <div className="saldo">
                    <span className="span-saldo"> SALDO</span>
                    <span className="value-saldo">{saldo.toFixed(2)}</span>
                </div>
            </ContainerTransactions>
            <ContainerButtons>
                <Link to="/entry" style={{textDecoration:"none"}}>
                    <ButtonTransaction>
                            <AiOutlinePlusCircle color="white" style={{fontSize:"22px"}} />
                            <span>Nova <br/> entrada</span>
                    </ButtonTransaction>
                </Link>
                <Link to="/output" style={{textDecoration:"none"}}>
                    <ButtonTransaction>
                        <AiOutlineMinusCircle color="white" style={{fontSize:"22px"}} />
                            <span>Nova <br/>saída</span>
                    </ButtonTransaction>
                </Link>
            </ContainerButtons>
            </>
}
            
        </ContainerWallet>
    );
}