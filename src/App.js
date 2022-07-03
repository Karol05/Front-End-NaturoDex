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

  //metodo para una consulta de los personajes que ya estan en la lista
  useEffect(() =>{
    const getPersonages = () => { //codigo que hace la consulta para la obtención de los datos
      fetch('http://127.0.0.1:5000/datos/get_all_data')
          .then(res =>res.json())
          .then(res => setPersonages(res))
    }
    getPersonages()
  },[])


  return (
      <Fragment>
        <Navbar brand="NarutoDex"/>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h2 style={{textAlign:"center"}}> Personage List</h2>
              <ListPersonage personages={personages}/>
            </div>
            <div className="col-5">
              <h2 style={{textAlign:"center"}}> Personage Form</h2>
              <Form createPersonages={createPersonages} setCreatePersonages={setCreatePersonages}/>
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default App;

