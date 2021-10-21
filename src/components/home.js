
import { ContainerWallet,StyledHeader,ContainerTransactions,ContainerButtons,ButtonTransaction,RegisterValue } from "./sharedStyled/styledcomponents";
import iconLogout from '../img/iconLogout.png';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai';
export default function Home(){
    return(
        <ContainerWallet>
            <StyledHeader>
                <h1>Olá,Fulano</h1>
                <img src={iconLogout} alt="logoutIcon"/>
            </StyledHeader>
            <ContainerTransactions>
                {/* <h2 className="not-found">Não há registros de entrada ou saída</h2> */}
                <RegisterValue>
                    <div className="date-desc">
                        <span className="date">30/11</span>
                        <span className="desc">Almoço Mãe</span>
                    </div> 
                        <span className="value">39,90</span>
                </RegisterValue>
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