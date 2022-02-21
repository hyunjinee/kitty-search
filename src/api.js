const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

// const request = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       const errorData = await response.json();
//       throw errorData;
//     }
//   } catch (e) {
//     throw {
//       error: true,
//       message: e.message,
//       status: e.status,
//     };
//   }
// };
const request = async (url) => {
  try {
    const result = await fetch(url);
    if (result.status < 300) return await result.json();
    else if (result.status < 400)
      return console.warn(`Redirection Error Code ${result.status}`);
    else if (result.status < 500)
      return console.warn(`Client Error Code ${result.status}`);
    else if (result.status < 600)
      return console.warn(`Server Error Code ${result.status}`);
  } catch (error) {
    console.warn(error);
  }
};

const api = {
  fetchCats: (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);

    // fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    //   .then((res) => res.json())
    //   .catch((e) => ({ message: e.message, status: e.status })),
    // try {
    //   const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    //   if (response.ok) return await response.json();
    // } catch (e) {
    //   console.error(e);
    // }
    // 랜덤으로 20개의 고양이 사진을 리턴합니다.
    // fetch(`${API_ENDPOINT}/api/cats/random50`).then((res) => console.log(res));
    // const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    // console.log(response);
    // const response = await fetch(
    //   "https://api.thecatapi.com/v1/images/search?limit=20"
    // );
    // console.log(response);
    // .then((res) => res.json())
    // .catch((e) => ({ message: e.message, status: e.status }));
    // try {
    //   const result = await fetch(`${API_ENDPOINT}/cats/random50`);
    //   console.log(result, "??");
    //   return { isError: false, data: result };
    // } catch (e) {
    //   return {
    //     isError: true,
    //     data: e,
    //   };
    // }
  },
  fetchCatDetails: async (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
    // const response = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    // if (response.ok) return await response.json();
  },
};

export { api };
