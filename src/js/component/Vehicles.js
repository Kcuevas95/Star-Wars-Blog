import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text ">
					Name: {props.name}
					<br />
					Model: {props.model}
					<br />
					Vehicle-Class: {props.vehicle_class}
				</p>
				<Link
					to={`single/vehicles/${props.name}`}
					href="#"
					className="btn btn-primary"
					style={{ float: "left" }}>
					learn More!
				</Link>
				<button
					onClick={() => actions.addFavorites(props.name)}
					href="#"
					className="btn btn-primary"
					style={{ float: "right" }}>
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

Vehicles.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	vehicle_class: PropTypes.string
};
