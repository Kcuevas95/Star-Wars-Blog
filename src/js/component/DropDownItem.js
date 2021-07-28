import React, { useContext } from "react";
import { Button } from "./Card";
import { Context } from "../store/appContext";

export const DropDownItem = () => {
	const { store } = useContext(Context);
	return (
		<div className="row">
			{store.favorites.map((item, index) => {
				return (
					<a key={index} className="dropdown-item" href="#">
						{item}
						<i className="fas fa-trash" style={{ float: "right" }} />
					</a>
				);
			})}
		</div>
	);
};
