

const Form = () => {

    return(
        <form >
            <div className="mb-3">
                <label htmlFor="id_personage" className="form-label">ID</label>
                <input name="id_personage"  type="number" id="id_personage" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input name="Nombre"  type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="village" className="form-label">Village</label>
                <input name="Aldea" type="text" id="village" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="power" className="form-label">Power</label>
                <input name="Fuerza" type="text" id="power" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="nature" className="form-label">Nature</label>
                <input name="Naturaleza" type="text" id="nature" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ability" className="form-label">Ability</label>
                <input name="Habilidad" type="text" id="ability" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary"> Submit </button>
        </form>
    );
}

export default Form;
