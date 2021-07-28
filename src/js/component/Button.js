import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { DropDownItem } from "../component/DropDownItem";

export const Button = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="dropdown">
			<button
				className="btn btn-secondary btn-lg dropdown-toggle"
				type="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
			</button>
			<div
				className="dropdown-menu dropdown-menu-right"
				aria-labelledby="dropdownMenuButton"
				data-bs-toggle="dropdown">
				<DropDownItem />
			</div>
		</div>
	);
};
