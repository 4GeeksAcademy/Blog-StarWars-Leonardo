import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CartaDatos } from "../component/cartaDatos";

export const Personajes = ({ }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const personajes = store.personajes;
	return (
		<div className="container">
			<h1 className="titulo-1">PERSONAJES</h1>
			<div className="d-flex justify-content-center">
				<div className="row container">
					{personajes.map((element) => {

						return (
							<CartaDatos imagen={element.uid} direccion="infoPersonaje"
								nombre={element.name} fuente="characters" />
						);
					})
					}
				</div>
			</div>
		</div>
	);
};