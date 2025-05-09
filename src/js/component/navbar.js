import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let id_favoritos = store.id_favoritos;
	
	

	return (
		<nav className="d-flex navbar fondo-nav navbar-light pt-0">
			<Link to="/">
				<div className="logo">
					<h1 className="titulo-nav ">STAR WARS</h1>
				</div>
			</Link>
			<div className="justify-content-end">
			<select className="lista-fav">
				<option>-----</option>
				{id_favoritos.length > 0 ? (
					id_favoritos.map((element) => {
						return (
							<option>{element}</option>
						);
					}
					)
				) : (
					<option>No hay favoritos agregados</option>
				)}
			</select>
			</div>
		</nav >
	);
};