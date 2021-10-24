
import { ContainerWallet,StyledHeader,ContainerTransactions,ContainerButtons,ButtonTransaction,RegisterValue } from "./sharedStyled/styledcomponents";
import iconLogout from '../img/iconLogout.png';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai';
import { useContext } from "react";
import UserContext from "../contexts/usercontext";
import { getHistory } from "../service/api";
import { useEffect, useState } from "react/cjs/react.development";
import dayjs from "dayjs";
export default function Home(){
    const {user} = useContext(UserContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory(user.token).then((res)=> {
            setHistory(res.data);
        })
        // eslint-disable-next-line
    },[])

    console.log(history);
    return(
        <ContainerWallet>
            <StyledHeader>
                <h1>Olá, {user.name}</h1>
                <img src={iconLogout} alt="logoutIcon"/>
            </StyledHeader>
            <ContainerTransactions>
                {history.length === 0 ? <h2 className="not-found">Não há registros de entrada ou saída</h2> : 
                    
                <RegisterValue>
                    {history.map((element) => {
                        return(      
                            <>
                                <div className="date-desc">
                                    <span className="date">{dayjs(element.date).format('DD/MM')}</span>
                                    <span className="desc">{element.description}</span>
                                </div> 
                                <span className="value">{element.value}</span>
                            </>)
                    })}
                </RegisterValue>
                }
                <div className="saldo">
                    <span className="span-saldo"> SALDO</span>
                    <span className="value-saldo">2849,96</span>
                </div>
            </ContainerTransactions>
            <ContainerButtons>
                <ButtonTransaction>
                        <AiOutlinePlusCircle color="white" style={{fontSize:"22px"}} />
                        <span>Nova <br/> entrada</span>
                </ButtonTransaction>
                <ButtonTransaction>
                    <AiOutlineMinusCircle color="white" style={{fontSize:"22px"}} />
                        <span>Nova <br/>saída</span>
                </ButtonTransaction>
            </ContainerButtons>

        </ContainerWallet>
    );
}