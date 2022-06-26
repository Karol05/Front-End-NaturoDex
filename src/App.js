import React,{Fragment,useState,useEffect} from "react";
import Navbar from './Components/Navbar'
import ListPersonage from "./Components/ListPersonage";
import Form from "./Components/Form";

function App() {


  //estado de lista de los personajes
  const [personages,setPersonages] = useState([])
  //estado de la creacion de los personajes
  const [createPersonages,setCreatePersonages] = useState({
    id: 0,
    Nombre: '',
    Aldea:'',
    Fuerza:'',
    Naturaleza: '',
    Habilidad: ''
  })


  return (
      <Fragment>
        <Navbar brand="NarutoDex"/>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h2 style={{textAlign:"center"}}> Personage List</h2>
              <ListPersonage />
            </div>
            <div className="col-5">
              <h2 style={{textAlign:"center"}}> Personage Form</h2>
              <Form />
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default App;
