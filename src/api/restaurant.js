import instance from "./axios";

// 전체 맛집 목록 가져오기
export const getAllRestaurants = async () => {
  try {
    const res = await instance.get("/places");
    return res.data.places;
  } catch (error) {
    console.error("맛집 목록 불러오기 실패:", error);
    throw error;
  }
};

// 찜한 맛집 목록 가져오기
export const getPinnedRestaurants = async () => {
  try {
    const res = await instance.get("/users/places");
    return res.data.places;
  } catch (error) {
    console.error("찜한 맛집 불러오기 실패:", error);
    throw error;
  }
};

// 찜 추가
export const addPin = async (place) => {
  if (!place || !place.id) {
    console.error("보낼 데이터가 유효하지 않습니다.");
    return;}
  try {
    console.log("[API] 찜 추가 요청:", place);
    const res = await instance.post("/users/places", { place });
    console.log("[API] 찜 추가 성공:", res.data);
  } catch (error) {
    console.error("찜 추가 실패 : ", error.message);
    throw error;
  }
};

// 찜 삭제
export const removePin = async (placeId) => {
  try {
    console.log("[API] 찜 삭제 요청:", placeId);
    await instance.delete(`/users/places/${placeId}`);
    console.log("[API] 찜 삭제 성공");
    } catch (error) {
    console.error("찜 삭제 실패 : ", error.message);
    throw error;
  }
};
