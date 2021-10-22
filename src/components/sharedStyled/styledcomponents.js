import styled from "styled-components";



const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-color: #8C11BE;
justify-content: center;
align-items: center;
    h1{
        font-family: 'Saira Stencil One',cursive;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const StyledInput = styled.input`
 width: 326px;
 height: 58px;
 border-radius: 5px;
 background-color: #FFFFFF;
 border: none;
 margin-bottom: 13px;
 ::placeholder{
     font-family: 'Raleway',sans-serif;
     font-size: 20px;
     color: #000000;
     padding: 10px;

 }
`

const StyledButton = styled.button`
font-family: 'Raleway',sans-serif;
font-size: 20px;
 width: 326px;
 height: 46px;
 border-radius: 5px;
 background-color: #A328D6;
 color: #FFFFFF;
 border: none;
 margin-bottom: 36px;
 cursor: pointer;
`

const StyledLink = styled.h2`
font-family: 'Raleway',sans-serif;
font-size: 15px;
color: #FFFFFF;
font-weight: bold;
cursor: pointer;
`
const StyledHeader = styled.div`
width: 326px;
 height:  78px;
 display: flex;
justify-content: space-between;
align-items: center;
h1{
     font-family: 'Raleway',sans-serif;
     font-size: 26px;
     color: #FFFFFF;
     font-weight: bold;
 }
 .logout{
     font-size: 26px;
     background-color: #FFFFFF;

 }
`
const ContainerWallet = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #8C11BE;
`
const ContainerTransactions = styled.div`
position: relative;
width: 326px;
height: 446px;
border-radius: 5px;
background-color: #FFFFFF;
display: flex;
align-items: flex-start;


 .not-found{
     text-align: center;
     padding: 50px;
     font-family: 'Raleway',sans-serif;
     font-size: 20px;
     color: #868686;
 }
 .saldo{
     position: absolute;
     font-family: 'Raleway',sans-serif;
     font-size: 17px;
     bottom: 10px;
     right: 0;
     left: 0;
     width: 100%;
     display: flex;
     justify-content: space-between;
    .span-saldo{
        margin-left: 12px;
        font-weight: bold;
    }
    .value-saldo{
        margin-right: 12px;
        color: #03AC00;
    }
 }
`
const ContainerButtons = styled.div`
width: 326px;
display: flex;
justify-content: space-between;
margin-top: 13px;
margin-bottom: 16px;
`

const ButtonTransaction = styled.div`
width: 135px;
height: 114px;
background-color: #A328D6;
padding: 10px;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
  img{
      width: 22px;
      height: 22px;
  }
  span{
      font-family: 'Raleway',sans-serif;
      font-size: 17px;
      font-weight: bold;
      color: #FFFFFF;
      text-align: start;
  }
`
const ContainerValues = styled.div`
width: 100vw;
height: 100vh;
background-color:#8C11BE;
display: flex;
flex-direction: column;
`
const RegisterValue = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Raleway',sans-serif;
font-size: 16px;
width: 100%;
height: 40px;

  .date{
      color: #C6C6C6;
      margin-right: 6px;
      margin-left: 12px;
  }
  .desc{
      color: #000000;
  }
  .value{
    color: #C70000;
    margin-right: 12px;
  }

`

export {
    Container,
    StyledInput,
    StyledButton,
    StyledLink,
    InputContainer,
    StyledHeader,
    ContainerWallet,
    ContainerTransactions,
    ContainerButtons,
    ButtonTransaction,
    ContainerValues,
    RegisterValue,
}