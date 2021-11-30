import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import DropdownItem from "react-bootstrap/esm";
import starwarsimage from "../../img/starwarsimage.jpg";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={starwarsimage} style={{ width: "100px" }} />
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="toggle" variant="primary" id="dropdown-basic" size="lg">
					Dropdown Button
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, i) => (
							<Dropdown.Item href="#/action-1" key={i}>
								{favorite}
								<Button variant="danger" onClick={() => actions.addFavorites(favorite, i)}>
									<i className="fas fa-trash-alt" />
								</Button>
							</Dropdown.Item>
						))
					) : (
						<DropdownItem>There are no favorites</DropdownItem>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
