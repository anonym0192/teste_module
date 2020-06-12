import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: inline-block;
    border: solid blue 2px;
    background-color: white;
    color: blue;
    width: 500px;
    height: 50px;
    font-size: 18px; 
    margin-bottom: 10px;
`;

const Button = styled.button`
    color: ${ props => props.color || '#000'},
    border: solid ${ props => props.color || '#000'} 1px,
    background-color: #fff;
    padding: 20px;
    font-size: 18px;
`;

function SearchBox(props){

    const [texto, setTexto] = useState('');


    useEffect(()=>{

        props.funcaoPassada(texto);

    },
    [texto]);

    


    return (
        <Input onChange={(e) => setTexto(e.target.value) } type="text" placeholder={ props.frase ? props.frase : "Digite algo" }></Input>
        );
}

function SearchBoxListInclude(props){

    const [text, setText] = useState();

    function keyUpHandle(e){

        //alert(e.target.nodeName);

        if(e.keyCode == 13 || e.type == 'click'){
            
            if(text){
                props.receiveText(text);
                e.target.value = "";
            }
           
        }
    }
    return (
        <>
            <Input type="text" onChange={(e) => setText(e.target.value)} onKeyUp={(e) => keyUpHandle(e)}></Input>
            <br></br>
            <Button color="blue" onClick={(e) => keyUpHandle(e)}>Add Item</Button>
        </>
    );
}

export {SearchBox, SearchBoxListInclude};
