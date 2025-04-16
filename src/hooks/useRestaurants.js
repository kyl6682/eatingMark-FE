import { useEffect, useState } from "react";
import { getAllRestaurants } from "../api/restaurant";

export const useRestaurants = () => {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const allData = await getAllRestaurants();

        setAll(allData);
        setError(null);
      } catch (err) {
        setError("데이터 불러오기 실패 : " + err.message);

        if (err.response?.status === 404) {
          setError("요청한 데이터를 찾을 수 없습니다. (404)");
        } else if (err.message === "Network Error") {
          setError("서버에 연결할 수 없습니다.");
        } else {
          setError("문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { all, loading, error };
};
