const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myURL: "https://swapi.dev/api",
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},

		actions: {
			fetchCharacterData: async () => {
				const store = getStore();
				try {
					let waitForCharacters = await fetch(store.myURL + "/people/");
					let jsonOfCharacters = await waitForCharacters.json();
					let waitForPlanets = await fetch(store.myURL + "/planets/");
					let jsonOfPlanets = await waitForPlanets.json();
					let waitForVehicles = await fetch(store.myURL + "/vehicles/");
					let jsonOfVehicles = await waitForVehicles.json();
					setStore({ characters: jsonOfCharacters.results });
					setStore({ planets: jsonOfPlanets.results });
					setStore({ vehicles: jsonOfVehicles.results });
				} catch (error) {
					console.log(error);
				}
			},

			addFavorites: item => {
				let myFavorites = getStore().favorites;
				let selected = myFavorites.find(element => element === item);
				if (selected) {
					myFavorites = myFavorites.filter(element => item !== element);
					setStore({ favorites: myFavorites });
				} else {
					myFavorites = [...myFavorites, item];
					setStore({ favorites: myFavorites });
				}
			}
		}
	};
};

export default getState;

// Use getActions to call a function within a fuction
// exampleFunction: () => {
// 	getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// }
