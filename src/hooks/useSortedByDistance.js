import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../utils/loc";

export const useSortedByDistance = (items) => {
  const [sortedItems, setSortedItems] = useState(items);
  const [originalItems, setOriginalItems] = useState(items);
  const [isSorted, setIsSorted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSortedItems(items);
    setOriginalItems(items);
  }, [items]);

  const toggleSort = () => {
    if (isSorted) {
      setSortedItems(originalItems);
      setIsSorted(false);
      setError(null);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
            const { latitude, longitude } = pos.coords;
            const sorted = sortPlacesByDistance(items, latitude, longitude);
          setSortedItems(sorted);
          setIsSorted(true);
          setError(null);
        },
        (err) => {
          console.warn("위치 정보를 가져올 수 없습니다.", err);
          setError("위치 정보를 가져올 수 없습니다.")
          setSortedItems(items);
          setIsSorted(false);
        }
      );
    }
  };
  return {sortedItems, isSorted, toggleSort, error}
};
