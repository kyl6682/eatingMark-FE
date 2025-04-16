import RestaurantSection from "./components/RestaurantSection";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 w-full text-center">
        <h1 className="text-white text-3xl m-5">나의 맛집 페이지</h1>
      </div>
      <RestaurantSection title="찜한 맛집" type="pinned" />
      <RestaurantSection title="맛집 목록" type="all" />
    </div>
  );
}

export default App;
