import { useState, useEffect, createContext, useContext } from "react";
import { addPin, removePin, getPinnedRestaurants } from "../api/restaurant";

const PinnedContext = createContext([]);

export const PinnedProvider = ({ children }) => {
  const [pinned, setPinned] = useState([]);

  useEffect(() => {
    getPinnedRestaurants().then(setPinned);
  }, []);

  const addToPinned = async (place) => {
    await addPin(place);
    setPinned((prev) => [...prev, place]);
  };

  const removeFromPinned = async (placeId) => {
    await removePin(placeId);
    setPinned((prev) => prev.filter((p) => p?.id !== placeId));
  };

  return (
    <PinnedContext.Provider value={{ pinned, addToPinned, removeFromPinned }}>
      {children}
    </PinnedContext.Provider>
  );
};

export const usePinned = () => useContext(PinnedContext);
