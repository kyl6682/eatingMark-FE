import { usePinned } from "../contexts/PinnedContext";

const RestaurantCard = ({ item }) => {
  const { pinned, addToPinned, removeFromPinned } = usePinned();
  const isPinned = Array.isArray(pinned) ? pinned.some((pin) => pin?.id === item.id) : false

  const toggleIsPinned = () => {
    if (isPinned) {
      const isConfirmed = confirm("정말로 삭제하시겠습니까?");
      if (isConfirmed) removeFromPinned(item.id);
    } 
    else addToPinned(item);
  };
  
  return (
    <div className="relative w-44 h-52 flex-col bg-gray-100 rounded-md flex items-center overflow-hidden">
      <button 
        onClick={toggleIsPinned}
        className="absolute top-2 right-2 text-xl"
      >
        {isPinned ? "❤️" : "🤍"}
      </button>
      <img
        src={`http://localhost:3000/${item.image.src}`}
        className="w-full h-40 object-cover"
      />
      <div className="text-sm text-center mt-3">{item.title}</div>
    </div>
  );
};

export default RestaurantCard;
