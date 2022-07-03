import React from "react";

const Form = ({createPersonages,setCreatePersonages}) => {

    //modificar los estados, correspondientes a los datos ingresados en el formulario
    const handleChange = e => {
        setCreatePersonages({
            ...createPersonages,
            [e.target.name]: e.target.value
        })
    }
    let{id,Nombre,Aldea,Fuerza,Naturaleza,Habilidad} = createPersonages

    const handleSubmit = () => {
        id = parseInt(id,10)
        console.log(id +' '+Nombre + '' + Aldea + '' + Fuerza + '' + Naturaleza + '' + Habilidad)
        //validacion de los datos que se ingresaran
        if (id <= 0 || Nombre === '' || Aldea === '' || Fuerza === ''|| Naturaleza === ''|| Habilidad === '' ){
            alert('Todos los campos son obligatorios')
            return
        }
        //consulta
        fetch('http://127.0.0.1:5000/datos/add', { method: 'POST',
            body: JSON.stringify(createPersonages),
            headers:{ 'Content-Type': 'application/json' } }).then(res => res.json()) .catch(error => console.error('Error:', error)) .then(response => console.log('Success:', response));

            setCreatePersonages({ //para reiniciar el formulario y quede vacio
            id: 0,
            Nombre: '',
            Aldea:'',
            Fuerza:'',
            Naturaleza: '',
            Habilidad: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input  value={id} name="id" onChange={handleChange} type="number" id="id" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input value={Nombre} name="Nombre" onChange={handleChange}type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="village" className="form-label">Village</label>
                <input value={Aldea} name="Aldea" onChange={handleChange}type="text" id="village" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="power" className="form-label">Power</label>
                <input value={Fuerza} name="Fuerza" onChange={handleChange}type="text" id="power" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="nature" className="form-label">Nature</label>
                <input value={Naturaleza} name="Naturaleza" onChange={handleChange}type="text" id="nature" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ability" className="form-label">Ability</label>
                <input value={Habilidad} name="Habilidad" onChange={handleChange}type="text" id="ability" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary"> Submit </button>
        </form>
    );
}
export default Form;
