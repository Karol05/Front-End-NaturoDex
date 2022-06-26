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
        </table>
    );
}

export  default ListPersonage;