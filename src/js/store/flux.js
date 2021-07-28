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
				// console.log(store.characters);
				// console.log(store.planets);
				// console.log(store.vehicles);
			},

			addFavorites: name => {
				let oldFavoritesArray = getStore().favorites;
				let newFavoritesArray;
				let foundFavorite = oldFavoritesArray.find(favoriteName => {
					return favoriteName == name;
				});

				if (foundFavorite) {
					newFavoritesArray = oldFavoritesArray.filter(favoriteName => {
						favoriteName != name;
					});
				} else {
					newFavoritesArray = [...oldFavoritesArray, name];
				}

				setStore({ favorites: newFavoritesArray });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
