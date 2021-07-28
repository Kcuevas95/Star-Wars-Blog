// import React from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text ">
					Gender: {props.gender}
					<br />
					Hair-Color: {props.hair_color}
					<br />
					Eye-Color: {props.eye_color}
				</p>
				<Link to={`single/people/${props.name}`} href="#" className="btn btn-primary" style={{ float: "left" }}>
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

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string
};
