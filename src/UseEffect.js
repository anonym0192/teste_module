import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: auto;
    font-size: 16px;
    height: 50px;
    background-color: blue;
    color: white;
    margin-bottom: 20px;
`;
function UseEffect(){

    const [contagem, setContagem] = useState(0);

    const contar = () => {

        setContagem( contagem + 1);
    }

    useEffect(() => {

        if(contagem == 0){
            document.title = "Contagem ainda e zero";

        }else{
            document.title = "Contagem: "+contagem;
        }
        
        
        return () => alert("The title was updated!");
    },
    [contagem]);


    return (<div>
                <p>Contagem : {contagem}</p>
                <Button onClick={contar}>Click me</Button>

            </div>)

}

export default UseEffect;