import React, { Component } from "react";

export const CartaIndividual = ({ foto, nombre, dato1, dato2, dato3, dato4, dato5, dato6 }) => (
    <div className="">
        <div className="row ms-1">
        <img 
    src={foto} 
    className="col-md-4 img-info"
    alt="Imagen no encontrada" 
    onError={(e) => e.target.src = "https://collection.cloudinary.com/du8xtjslt/3d23914c5414250fa54a7281b1694219?"} 
/>
            <div className="col-md-6">
                <h1 className="titulo-info ">{nombre}</h1>
                <p>{dato1}</p>
                <p>{dato2}</p>
                <p>{dato3}</p>
                <p>{dato4}</p>
                <p>{dato5}</p>
                <p>{dato6}</p>
            </div>
        </div>
    </div>
);
