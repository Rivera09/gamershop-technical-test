import { Game } from "@/utils/endpoint";
import Button from "../Button";
import Image from "next/image";

const Card = ({
  game,
  onButtonClick,
  isOnCart,
}: {
  game: Game;
  onButtonClick?: (game: Game) => void;
  isOnCart?: boolean;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-5 justify-between border border-stroke-secondary p-6 rounded-2xl max-w-[380px] min-w-[327px]">
      <div className="rounded-t-2xl overflow-hidden relative">
        <Image
          src={game.image}
          alt={game.name}
          className="w-full object-cover h-[240px]"
          height={240}
          width={309}
        />
        {game.isNew && (
          <span className="absolute top-[12px] left-[12px] bg-stone-100 py-2 px-3 rounded-sm">
            New
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-ag/bold text-neutral-700">{game.genre}</p>
        <div className="flex justify-between items-center gap-2">
          <p className="text-lg/lg-bold">{game.name}</p>
          <p className="text-xs/xs-bold">${game.price}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          onButtonClick?.(game);
        }}
        variant="outlined"
      >
        {!isOnCart ? "Add to cart" : "Remove from cart"}
      </Button>
    </div>
  );
};

export default Card;
