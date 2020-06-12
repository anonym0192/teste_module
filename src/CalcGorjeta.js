import React, {useState} from 'react';
import styled from 'styled-components';


const Input = styled.input`
    width: 250px;
    height: 50px;
    font-size: 16px;
    background-color: #111;
    color: #fff;
    outline: yellow;
`;

const Button = styled.button`
    padding: 15px;
    color: #fff;
    background-color: #111;
    border: solid yellow 1px; 

`;


function CalcGorjeta(props){

    const [ conta, setConta ] = useState(0);
    const [ pct, setPct] = useState(10000);

    const [ total, setTotal ] = useState(0);

    






    return (<div style={{ marginBottom: 30}}>

        <h1>Calculo do valor da gorjeta</h1>

        <p>Digite o valor da Conta</p>
        <Input type="number" onChange={(e) => setConta(parseFloat(e.target.value))}></Input>
        <p>Qual o percentual da gorjeta</p>
        <Input type="number" onChange={(e) => setPct(parseFloat(e.target.value))}></Input>
        <br></br><br></br>
        <Button>Calcular</Button>
        

        { conta > 0 && 
            <>
            <p>Valor da conta: {conta}</p>
            <p>Valor da gorjeta: { (conta * pct) / 100}</p>
            <h3>Total a pagar: { conta + (conta * pct / 100)}</h3>
            </>         
        }

            </div>);
}




export default CalcGorjeta;
