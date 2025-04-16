# EatingMark - 맛집 리스트

**EatingMark**

위치 정보를 기반으로 가까운 맛집을 거리순으로 정렬해서 볼 수 있고, 찜 기능을 통해 나만의 맛집 리스트를 관리할 수 있습니다.

---

## 기술 스택

### Frontend
- React (Vite)
- TailwindCSS
- Axios
- Context API

### Backend
- Node.js
- Express
- FileSystem (JSON 파일 기반 간단한 DB)

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 위치 기반 정렬 | 현재 위치를 기반으로 맛집을 거리순 정렬 |
| 찜하기/해제 | 맛집 카드를 클릭하여 찜 목록 추가/제거 가능 |
| 상태 메시지 표시 | 로딩 중, 에러 발생 시 사용자에게 메시지 표시 |

---

## 프로젝트 구조

```
eatingMarkProject/
├── client/   # React 프론트엔드
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   ├── api/
│   │   └── App.jsx
│   └── public/
├── server/   # Express 백엔드
│   ├── app.js
│   └── data/
│       ├── places.json
│       └── user-places.json
```

---

## 실행 방법

### 1. 클론 & 설치
- 서버
```bash
git clone https://github.com/yeah1832/eatingMark-BE.git
```
- 클라이언트
```bash
git clone https://github.com/kyl6682/eatingMark-FE.git
```

### 2. 클라이언트 (React)

```bash
cd eatingMakr-FE
npm install
npm run build
```

### 3. 서버 실행 (Express)

```bash
cd eatingMark-BE
npm install
node app.js
```

### 4. 접속하기

[http://localhost:3000](http://localhost:3000)  
> React 앱이 Express 서버를 통해 서빙

---

## API 명세

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/places` | 전체 맛집 목록 가져오기 |
| `GET`  | `/users/places` | 찜한 맛집 목록 가져오기 |
| `POST` | `/users/places` | 찜한 맛집 추가 (body: `{ place }`) |
| `DELETE` | `/users/places/:id` | 찜한 맛집 삭제 |

---

## 구현 기능

- `useRestaurants` 훅을 통해 API 데이터 로딩/에러 상태 관리
- `useSortedByDistance` 훅으로 위치 기반 거리 정렬 처리
- `PinnedContext`를 통해 전역으로 찜 목록 상태 공유
- 조건부 렌더링으로 사용자 경험 향상

---

## 배포

### 배포 링크 : https://eating-mark-fe.vercel.app/
> 배포는 vercel에서 진행 
> 로컬 환경에서 서버를 실행시켜야 제대로 실행 가능합니다.

---