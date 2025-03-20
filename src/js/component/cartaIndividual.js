import React from "react";

export const CartaIndividual = ({ foto, nombre, dato1, dato2, dato3, dato4, dato5, dato6 }) => (
    <div className="card mb-4">
        <div className="row g-0">
            <div className="col-md-4">
                <img 
                    src={foto} 
                    className="img-fluid img-info" 
                    alt="Imagen no encontrada" 
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h1 className="titulo-info">{nombre}</h1>
                    <ul className="list-unstyled">
                        <li>{dato1}</li>
                        <li>{dato2}</li>
                        <li>{dato3}</li>
                        <li>{dato4}</li>
                        <li>{dato5}</li>
                        <li>{dato6}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
