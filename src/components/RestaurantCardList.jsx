import RestaurantCard from "./RestaurantCard";

const RestaurantCardList = ({ items }) => {
  console.log("items:", items);


  return (
    <div className="flex flex-wrap justify-start w-full max-w-3xl gap-4">
      {items
        .filter((item) => item && item.id)
        .map((item) => (
          <RestaurantCard key={item.id} item={item} />
        ))}
    </div>
  );
};

export default RestaurantCardList;
