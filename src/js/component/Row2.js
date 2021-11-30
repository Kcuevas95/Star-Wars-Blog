import React, { useContext } from "react";
import { Planets } from "../views/Planets";
import { Context } from "../store/appContext";

export const Row2 = () => {
	const { store } = useContext(Context);
	return (
		<div className="row mb-5">
			{store.planets.map((item, index) => {
				return <Planets key={index} name={item.name} population={item.population} terrain={item.terrain} />;
			})}
		</div>
	);
};
