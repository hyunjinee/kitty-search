const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchRandomCats: async () => {
    // 랜덤으로 20개의 고양이 사진을 리턴합니다.
    try {
      const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
      return { isError: false, data: result };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
};
