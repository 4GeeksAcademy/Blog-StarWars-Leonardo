import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { BotonFavoritos } from "./botonFavoritos";

export const CartaDatos = ({ nombre, imagen, fuente, direccion }) => {

	return (
		<div className="col-md-3 mt-3">
			<div className="card">
				<img src={`https://starwars-visualguide.com/assets/img/${fuente}/${imagen}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<div className="row">
					<Link className="col-xl-9" to={`/${direccion}/${imagen}`}><button className="btn-starwars mt-4"> Descubre más </button></Link>
					<BotonFavoritos direccion={direccion} id={imagen} nombre={nombre}/>
					</div>
					
				</div>
			</div>
		</div>
	)
}