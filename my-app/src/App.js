import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  var name = "Laysa"
 
  return (
    <div className="App">
      <h1>Agora deu certo</h1>
      <HelloWorld/>
      <SayMyName name="Gabriel"/>
      <SayMyName name= {name}/>
      <Pessoa nome="Gabriel" idade="28" profissao="Programador"  foto="https://static.wikia.nocookie.net/swordartonline/images/e/e2/Kirito_VR.png/revision/latest?cb=20210905161320&path-prefix=pt-br"/>
      <Frases/>
      <List/>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
