//rafce

export type Coffee = {
  id: number;
  title: string;
  description: string;
  ingredients: string | string[];
  image: string;
};
export type Props = {
  coffee: Coffee;
};

const Card = ({ coffee }: Props) => {
  const ingredients =
    typeof coffee.ingredients === "string"
      ? coffee.ingredients.split(", ")
      : coffee.ingredients;

  return (
    <div className="flex flex-col m-4 shadow rounded-xl bg-white max-w-96">
      {/* Card Image */}
      <img className="rounded-t-xl" src={coffee.image} />
      {/* Card Body */}
      <div className="flex flex-col p-4">
        {/* Card Title */}
        <span className="text-xl">{coffee.title}</span>
        {/* Card Description */}
        <span className="text-base text-slate-500">{coffee.description}</span>
        {/* Badge Container */}
        <span className="flex gap-4">
          {ingredients.map((x) => (
            <span className="text-orange-500 bg-orange-100 px-2 py-0 rounded border border-orange-500">
              {x}
            </span>
          ))}
          {/* {Coffee, Banana, Ice}*/}
        </span>
      </div>
    </div>
  );
};

export default Card;
