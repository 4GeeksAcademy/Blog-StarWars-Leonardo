import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Pelis = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const pelis = store.pelis;
	return (
		<div className="container">
			<h1 className="titulo-1">PELICULAS</h1>
			<div className="d-flex justify-content-center">
				<div className="row container">
					{pelis.map((element) => {

						return (
							<CartaDatos imagen={element.uid} direccion="infoPelicula"
								nombre={element.properties.title} fuente="films" />
						);
					})
					}
				</div>
			</div>
		</div>
	);
};