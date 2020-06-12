import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CalcGorjeta from './CalcGorjeta';
import UseEffect from './UseEffect';
import {SearchBox, SearchBoxListInclude } from './components/SearchBox.js';
import Modal from './components/Modal';

const ModalShow = styled.button`
width: auto;
height: auto;
border: solid 1px #fff;
color: ${props => '#fff' || ''};
padding: 20px;
background-color: ${props => props.color || ''};

&.normal{
  color: #000;
  boder: solid 1px transparent;
  background-color: '';
}
`;

function UseModal(){

  const [visible, setVisible] = useState(false);

  const openModal = () =>{

      
        setVisible(true);
      
   }

  return (
    <>
      <ModalShow color="purple" onClick={openModal}>Modal Toggle</ModalShow>
      <ModalShow className="normal">I do nothing</ModalShow>
      <Modal visible={visible} setVisible={setVisible}>
        <h1>Internal content of my Modal</h1>
      </Modal>
    </>
  );
}

function State()
{
  const [counter, setCounter ] = useState(0);

  const counterIncrease = () => setCounter(counter + 1);

  return (<div>
            <p>Contagem {counter} </p>
            <button onClick={counterIncrease}>Increase Counter</button>
          </div>);
}


const Input = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  background-color: #111;
  outline: red;
  color: #fff;
`;

const ButtonArea = styled.div`
  width: 800px;
  height: auto;
  border: purple solid 1px;
  padding: 25px;

`;

const Botao = styled.button`
  color: ${ props => props.color || '#ddd'};
  padding: 20px;
  border: solid 1px;
  border-color: ${ props => props.color || '#ddd'};
  font-size: 18px;
  width: 180px;

  &:hover{
    color: #fff;
    background-color: ${props => props.color || '#eee'}
  }

`;

const TinyButton = styled(Botao)`
  padding: 5px;
  color: #000;
  font-size: 14px;
`;

class Avatar extends React.Component{

 
  render(){

    let paragrafo1 = 'paragraph 1';
    let paragrafo2 = 'paragraph 2';
    let paragrafo3 = 'paragraph 3';

    return <>
    
                <img src={this.props.url} alt={this.props.name}></img>
                <p style={{color: '#ff0000'}}> {paragrafo1} </p>
                <p style={{color: '#00ff00'}}> {paragrafo2} </p>
                <p style={{color: '#0000ff'}}> {paragrafo3} </p>   
           </>;
  }
}
/*
function Avatar(props){

  
  return <>
        <img src={logo}></img>
      </>;
}
*/

function InputCaracteres(){

  const [ caracteresCount, setCaracteresCount] = useState(0);


    return(<>
        <Input type="text" onChange={(e) => setCaracteresCount( e.target.value.length )}></Input>
        { caracteresCount > 0 && 
          <p>{caracteresCount} caractere{ caracteresCount != 1 ? 's' : ''} </p>
        }
      </>);
    
}

function LStorage(){

  const [fieldStorage, setfieldStorage] = useState('');

  useEffect(() => {

    localStorage.setItem('field', fieldStorage);


  }, [fieldStorage]);

  

  return (
    <>
    <input type="text" style={{height: 50, backgroundColor: '#000', color: '#fff', fontSize: 18}}
    onChange={ (e) => setfieldStorage(e.target.value)} value={fieldStorage}></input>
    <p>Storage value : {localStorage.getItem('field')}</p>
    </>
  );
}

function App(props){

    const [ lista, setLista] = useState([]);

    const [generatorUsed, setGeneratorUsed] = useState(false);

    const generateList = () => {
      

      if(!generatorUsed){
          let newList =[  {title: 'Learn React', done: false },
                          {title: 'Learn NPM', done: false}, 
                          {title: 'Learn how to make professional template websites', done: true} ];
          
          setLista( lista.concat(newList));
          }
      setGeneratorUsed(true);
      
     };

    

    function receiveText( fieldValue ){

      let newList = [...lista , {title: fieldValue, done: false }];
      setLista( newList );

    }

    function doneToggle(index){

      let newLista = [...lista];
      
      index = index.toString();

      newLista[index].done = !newLista[index].done;

      setLista(newLista);

    }

    return (<div>


                <SearchBoxListInclude receiveText={receiveText} ></SearchBoxListInclude>
                
                <Botao color='blue' onClick={generateList}>Generate List</Botao>

                <ul>
                  {lista.map((item, index) => (
                        <>
                          <li key={index} onClick={() => doneToggle(index)}>
                                
                              {item.done &&
                                  <del>{item.title}</del>
                              }
                              {!item.done &&
                                  item.title
                              }
                          </li>
                        </>       
                            
                    ))
                  }
                </ul>

                <LStorage></LStorage>

                <UseModal></UseModal>
 
        </div>);


}
  
  
/*
class App extends React.Component{

    constructor(props){

      super(props);

      this.state = { blackbox: 'Default value',
                      text: ""};

    }

     onChangeText = ( novoTexto ) =>{

        this.setState( {text: novoTexto });

    } 
 
    
    render(){

    

    let url = "https://www.google.com.br/google.jpg";
    let name = "Anonimo";

    
    

    return (<>
              <Avatar url={url} name={name}></Avatar>
              <ButtonArea>
                <Botao color='#0000ff'>Blue Button</Botao> 
                <Botao color='#ff0000'>Red button</Botao>
                <Botao>Colorless Button</Botao> 
                <TinyButton>Tiny Button</TinyButton>
              </ButtonArea>
              <State></State>
              <Input type="text" placeholder="Black box" value={this.state.blackbox} onChange={(e) => this.setState({blackbox: e.target.value})}></Input>  
              <p>{this.state.blackbox}</p>

              <InputCaracteres></InputCaracteres>

              <CalcGorjeta></CalcGorjeta>

              <UseEffect></UseEffect>


              <p>{this.state.text}</p>


            </>);
  }
}*/




export default App;
