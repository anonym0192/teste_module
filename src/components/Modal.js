import React, { useState } from 'react';
import styled from 'styled-components';


const ModalBackground = styled.div`

    position: fixed;
    background-color: rgba( 0,0,0,0.7);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalArea = styled.div`

    background-color: #eee;
    width: 800px;
    height: 600px;
    padding: 20px;
`;

function Modal(props){


    const closeModal = () =>{

        props.setVisible(false);
        
    }

    return (
            props.visible &&
                <ModalBackground onClick={closeModal}>

                    <ModalArea>{props.children}</ModalArea>

                </ModalBackground>
        
        );



}

export default Modal;