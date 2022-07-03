import React from "react";

const ListPersonage = ({personages}) => {
    return(
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Village</th>
                <th>Power</th>
                <th>Nature</th>
                <th>Ability</th>
            </tr>
            </thead>
            <tbody>
            {personages.map(personage => (
                    <tr key={personage.id}>
                        <th>{personage.id}</th>
                        <th>{personage.Nombre}</th>
                        <th>{personage.Aldea}</th>
                        <th>{personage.Fuerza}</th>
                        <th>{personage.Naturaleza}</th>
                        <th>{personage.Habilidad}</th>
                    </tr>
                )//iteracion de los datos de la tabla
            )}
            </tbody>
        </table>
    );
}

export  default ListPersonage;