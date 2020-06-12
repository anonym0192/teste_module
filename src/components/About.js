import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {connect} from 'react-redux';

const InputRedux = styled.input`
background-color: ${props => props.color || 'purple'};
height: 50px;
font-size: 16px;
color: #fff;
`;

const BotaoRedux = styled.button`
background-color: ${props => props.color || 'purple'};
height: 50px;
font-size: 16px;
color: #fff;
`;

function About(props){

    let name = useSelector( state => state.user.name );
    let counter = useSelector( state => state.user.counter);

    const [field, setField] = useState('');

    /*const dispatch = useDispatch();

    const changeName = () => {

        dispatch({
            type: 'SET_NAME',
            payload: {name: field}
        });
    }*/
    

    return(
        <div className="wrap">
            <h2 style={{color: 'green'}}>This is my about page...</h2>
            <p>Name using redux: {props.name}</p>
            <p>Counter: {props.counter}</p>

            <InputRedux onChange={e => setField(e.target.value)}></InputRedux>
            <BotaoRedux onClick={props.changeName(field)}>Change Name</BotaoRedux>
        </div>
    );


}

const mapStateToProps = (state) => ({
    name: state.user.name,
    counter: state.user.counter
});

const mapDispatchToProps = (dispatch) => ({

    changeName: (newName) => (dispatch({
        type: 'SET_NAME',
        payload: newName
    })),
    setCounter: () => (dispatch({ type: "INCREMENT"})) 


});

export default connect(mapStateToProps ,mapDispatchToProps)(About);