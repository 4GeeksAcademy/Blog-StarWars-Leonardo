import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planetas } from "./views/planetas";
import { Personajes } from "./views/personajes";
import { Especies } from "./views/especies";
import { Naves } from "./views/naves";
import { Pelis } from "./views/peliculas";
import { Vehiculos } from "./views/vehiculos";
import { Navegacion } from "./component/navegacion";
import { InfoPersonaje } from "./views/infoPersonaje";
import { InfoPlaneta } from "./views/infoPlaneta";
import { InfoPelicula } from "./views/infoPelicula";
import { InfoEspecie } from "./views/infoEspecie";
import { InfoNave } from "./views/infoNave";
import { InfoVehiculo } from "./views/infoVehiculo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Navegacion/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/especies" element={<Especies />} />
						<Route path="/naves" element={<Naves />} />
						<Route path="/pelis" element={<Pelis />} />
						<Route path="/vehiculos" element={<Vehiculos />} />
						<Route path="/infoPersonaje/:personaje" element={<InfoPersonaje />} />
						<Route path="/infoPlaneta/:planeta" element={<InfoPlaneta />} />
						<Route path="/infoPelicula/:peli" element={<InfoPelicula />} />
						<Route path="/infoEspecie/:especie" element={<InfoEspecie />} />
						<Route path="/infoNave/:nave" element={<InfoNave />} />
						<Route path="/infoVehiculo/:vehiculo" element={<InfoVehiculo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);