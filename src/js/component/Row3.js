import React, { useContext } from "react";
import { Vehicles } from "./Vehicles";
import { Context } from "../store/appContext";

export const Row3 = () => {
	const { store } = useContext(Context);
	return (
		<div className="row mb-5">
			{store.vehicles.map((item, index) => {
				return <Vehicles key={index} name={item.name} model={item.model} vehicle_class={item.vehicle_class} />;
			})}
		</div>
	);
};
