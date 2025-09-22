import Image from "next/image";
import CloseIcon from "@/assets/icons/x.svg";
import { Game } from "@/utils/endpoint";

const CartCard = ({
  game,
  onRemove,
}: {
  game: Game;
  onRemove?: (game: Game) => void;
}) => {
  return (
    <div className="py-5 px-4 w-[327px] flex flex-col relative gap-4 md:flex-row md:w-[678px] md:gap-6 lg:w-full">
      <div className="md:gap-0 sm:w-[295px] max-md:relative md:w-[256px]">
        <Image
          src={game.image}
          width={259}
          height={136}
          className="object-cover h-[136px] md:min-w-[256px] md:h-[156px]"
          alt={game.name}
        />
        <button
          className="absolute top-0 right-0 md:top-5 md:right-4"
          onClick={() => {
            onRemove?.(game);
          }}
        >
          <Image
            width={24}
            height={24}
            src={CloseIcon}
            alt="remove from cart"
          />
        </button>
      </div>
      <div className="mtt-4">
        <p className="mb-3 text-ag/bold text-neutral-500">{game.genre}</p>
        <p className="mb-2 text-lg/lg-bold">{game.name}</p>
        {game.description && (
          <p className="mb-6 text-ag/regular text-neutral-500">
            {game.description}
          </p>
        )}
        <p className="text-end text-xs/xs-bold text-neutral-500">
          ${game.price}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
