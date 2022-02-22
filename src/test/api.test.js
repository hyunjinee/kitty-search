import axios from "axios";
const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

test("search cat", async () => {
  const cats = await axios.get(`${API_ENDPOINT}/api/cats/search?q=cat`);
  expect(cats.data).toEqual({
    data: [
      {
        id: "VQ_DGs4R8",
        url: "https://cdn2.thecatapi.com/images/VQ_DGs4R8.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "aJAsEA8uU",
        url: "https://cdn2.thecatapi.com/images/aJAsEA8uU.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "Dqtad3dGZ",
        url: "https://cdn2.thecatapi.com/images/Dqtad3dGZ.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "HksHrR8-9",
        url: "https://cdn2.thecatapi.com/images/HksHrR8-9.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "rBuGgH_Wj",
        url: "https://cdn2.thecatapi.com/images/rBuGgH_Wj.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "EXe1GhbrN",
        url: "https://cdn2.thecatapi.com/images/EXe1GhbrN.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "KUcr7eFlM",
        url: "https://cdn2.thecatapi.com/images/KUcr7eFlM.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "-ZBBqoWNQ",
        url: "https://cdn2.thecatapi.com/images/-ZBBqoWNQ.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "JAx-08Y0n",
        url: "https://cdn2.thecatapi.com/images/JAx-08Y0n.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "Dqtad3dGZ",
        url: "https://cdn2.thecatapi.com/images/Dqtad3dGZ.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "7afi4uNFM",
        url: "https://cdn2.thecatapi.com/images/7afi4uNFM.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "aJAsEA8uU",
        url: "https://cdn2.thecatapi.com/images/aJAsEA8uU.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "neW1xzZv4",
        url: "https://cdn2.thecatapi.com/images/neW1xzZv4.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "06dgGmEOV",
        url: "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "rWr-g-QVX",
        url: "https://cdn2.thecatapi.com/images/rWr-g-QVX.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "-ZBBqoWNQ",
        url: "https://cdn2.thecatapi.com/images/-ZBBqoWNQ.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "JR48AEqts",
        url: "https://cdn2.thecatapi.com/images/JR48AEqts.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "2JgKj4y4B",
        url: "https://cdn2.thecatapi.com/images/2JgKj4y4B.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "8B1WVLAWH",
        url: "https://cdn2.thecatapi.com/images/8B1WVLAWH.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "wJyw82pIl",
        url: "https://cdn2.thecatapi.com/images/wJyw82pIl.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "QUdOiX2hP",
        url: "https://cdn2.thecatapi.com/images/QUdOiX2hP.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "EXe1GhbrN",
        url: "https://cdn2.thecatapi.com/images/EXe1GhbrN.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "fLJYKez7P",
        url: "https://cdn2.thecatapi.com/images/fLJYKez7P.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "N9XTfbgI6",
        url: "https://cdn2.thecatapi.com/images/N9XTfbgI6.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "EXe1GhbrN",
        url: "https://cdn2.thecatapi.com/images/EXe1GhbrN.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "YYIPhGhCb",
        url: "https://cdn2.thecatapi.com/images/YYIPhGhCb.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "0vXzg857G",
        url: "https://cdn2.thecatapi.com/images/0vXzg857G.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "NZ_C9Edot",
        url: "https://cdn2.thecatapi.com/images/NZ_C9Edot.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "QUdOiX2hP",
        url: "https://cdn2.thecatapi.com/images/QUdOiX2hP.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "KUcr7eFlM",
        url: "https://cdn2.thecatapi.com/images/KUcr7eFlM.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
      {
        id: "jMZuST3W6",
        url: "https://cdn2.thecatapi.com/images/jMZuST3W6.jpg",
        name: "Ocicat / 오시캣",
      },
      {
        id: "bsr5KQSJ6",
        url: "https://cdn2.thecatapi.com/images/bsr5KQSJ6.jpg",
        name: "Norwegian Forest Cat / 노르웨이 숲 고양이",
      },
    ],
  });
});
