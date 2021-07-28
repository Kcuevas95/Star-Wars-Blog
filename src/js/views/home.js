import React, { useContext } from "react";
import "../../styles/home.scss";
import { Row } from "../component/Row";
import { Row2 } from "../component/Row2";
import { Row3 } from "../component/Row3";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1 style={{ paddingTop: "40px" }}>Characters</h1>
			<div className="text-center mt-5 scrolls ">
				<Row />
			</div>
			<h1 style={{ paddingTop: "40px" }}>Planets</h1>
			<div className="text-center mt-5 scrolls ">
				<Row2 />
			</div>
			<h1 style={{ paddingTop: "40px" }}>Vehicles</h1>
			<div className="text-center mt-5 scrolls ">
				<Row3 />
			</div>
		</div>
	);
};
