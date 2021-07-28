import React, { useContext } from "react";
import { Card } from "./Card";
import { Context } from "../store/appContext";

export const Row = () => {
	const { store } = useContext(Context);
	return (
		<div className="row mb-5">
			{store.characters.map((item, index) => {
				return (
					<Card
						key={index}
						name={item.name}
						gender={item.gender}
						hair_color={item.hair_color}
						eye_color={item.eye_color}
					/>
				);
			})}
		</div>
	);
};
