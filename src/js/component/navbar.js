import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Button } from "../component/Button";
import starwarsimage from "../../img/starwarsimage.jpg";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={starwarsimage} style={{ width: "100px" }} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<Button />
				</Link>
			</div>
		</nav>
	);
};
