import { usePinned } from "../contexts/PinnedContext";
import { useRestaurants } from "../hooks/useRestaurants";
import { useSortedByDistance } from "../hooks/useSortedByDistance";
import RestaurantCardList from "./RestaurantCardList";

const RestaurantSection = ({ title, type }) => {
  const { all, loading, error } = useRestaurants();
  const {pinned} = usePinned();

  const items = type === "pinned" ? pinned : all;

  const {
    sortedItems,
    isSorted,
    toggleSort,
    error: positionError,
  } = useSortedByDistance(items);

  return (
    <section className="flex flex-col items-center m-3 justify-center">
      <div className="w-full text-center items-center flex flex-col gap-4 m-5">
        <h2 className="text-lg font-bold">{title}</h2>
        <button
          onClick={toggleSort}
          className={`w-32 text-sm px-3 py-1 rounded-md transition ${
            isSorted
              ? "bg-blue-500 text-white"
              : "bg-transparent text-blue-600 hover:bg-blue-100"
          }`}
        >
          {isSorted ? "기본 순으로 보기" : "거리 순으로 보기"}
        </button>
        {positionError && (
          <p className="text-xs text-red-500">{positionError}</p>
        )}
      </div>

      <div className="w-full flex justify-center">
      {loading ? (
          <p className="text-center mt-10">로딩 중...</p>
        ) : error ? (
          <p className="text-center mt-10 text-red-500">{error}</p>
        ) : !items || items.length === 0 ? (
          <p className="text-gray-400">등록된 맛집이 없습니다!</p>
        ) : (
          <RestaurantCardList items={sortedItems} />
        )}
      </div>
    </section>
  );
};

export default RestaurantSection;
