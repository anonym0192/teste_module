import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


function Home(props){

    const [inputName, setInputName] = useState("");

    const history = useHistory(); 

    function goToAbout(){

        setTimeout( () => {

            history.replace("/sobre");

        }  , 2000)
    };

    function changeNameHandle(){
        props.setName(inputName);
    }

    return(
    <main>
        <div>
            <h2 style={{color: 'blueviolet'}}>Home page main content...</h2>
            {/*<button onClick={goToAbout}>Go to about page</button>*/}
            
            <p>Teste demo Redux</p>
            <span>User: {props.name}</span> <br/>
            <span>Counter: {props.counter}</span> <button onClick={props.increment}>Increment Number inside the redux store</button> <br/>
            <br/><br/>
            
            <input onChange={(e) => setInputName(e.target.value)} type="text" placeholder="type the name to save in store" /> 
            <button onClick={changeNameHandle}>Change Name Redux</button> <br/><br/>

            
            
        </div>
    </main>
    );
}

const mapStateToProps = (state) => {
    
    return ({
            name: state.user.name,
            counter: state.user.counter
            });
};

const mapDispatchToProps = (dispatch) => {

    return {
        
        setName: (newName) => dispatch({
            type: 'SET_NAME', 
            payload: {name: newName} 
        }),       
        increment: () => dispatch({
            type: 'INCREMENT'
        })

    }


};


export default connect(mapStateToProps, mapDispatchToProps)(Home);