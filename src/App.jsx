import "./App.scss";
import Tile from "./components/Tile/Tile";
import pokemonArray from "./data/pokemon";

const App = (props) => {
  // console.log(pokemonArray);
  const pokemonTileJsx = pokemonArray.map(({ id, name, types, sprite }) => {
    return <Tile key={id} name={name} id={id} types={types} image={sprite} />;
  });

  // show only the pokemon where the id >= 130

  const bigIdJsx = pokemonArray.map(({ id, name, types, sprite }) => {
    if (id >= 130) {
      return <Tile key={id} name={name} id={id} types={types} image={sprite} />;
    }
  });

  // show only the pokemon that have a type that includes "ground"
  const groundPokemonTileJsx = pokemonArray.map(
    ({ id, name, types, sprite }) => {
      if (types.includes("ground")) {
        return (
          <Tile key={id} name={name} id={id} types={types} image={sprite} />
        );
      }
    }
  );

  return (
    <div>
      <h1>Pokedom</h1>
      <main className="tile-container">{groundPokemonTileJsx}</main>
    </div>
  );
};

export default App;
