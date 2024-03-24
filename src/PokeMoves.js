import PokeMoveCard from "./PokeMoveCard.js";
import { moves } from "./data.js";

const PokeMoves = () => {
  console.log(moves);
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
