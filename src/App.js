import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import ImageInfo from "./components/ImageInfo.js";
import Loading from "./components/Loading.js";
import Error from "./components/Error.js";
import { api } from "./api.js";
import { getItem, setItem } from "./utils/sessionStorage.js";

console.log("app is running");
class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;
    const keywords = getItem("keywords");

    // ! sessionStorage 에서 데이터를 가져와서 넣는다.
    this.data = getItem("data");

    const searchInput = new SearchInput({
      $target,
      keywords,
      onSearch: async (keyword) => {
        const loader = new Loading({ $target });
        loader.show();
        // this.loading.toggleLoading();
        const { data } = await api.fetchCats(keyword);
        if (!data) {
          loader.hide();
          return;
        }
        setItem("data", data);
        searchResult.setState(data);
        // this.loading.toggleLoading();
        loader.hide();
      },
      onRandom: async () => {
        const loader = new Loading({ $target });
        // this.loading.toggleLoading();
        loader.show();
        const { data } = await api.fetchRandomCats();
        setItem("data", data);
        // this.setState(data);
        searchResult.setState(data);
        // this.loading.toggleLoading();
        loader.hide();
      },
    });

    const searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        const { data } = await api.fetchCatDetails(image.id);
        imageInfo.setState({
          visible: true,
          image: data,
        });
      },
    });

    const imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });

    // this.loading = new Loading({ $target });
    const error = new Error({ $target });

    // ! DOM에 다 그린후에, 세션 스토리지에서 데이터를 가져온다.
    // this.setState(this.data);
    searchResult.setState(this.data);
  }

  // setState(nextData) {
  //   this.data = nextData;
  //   // this.searchResult.setState(nextData);
  //   this.searchResult.setState(nextData);
  // }
}

export default App;

// constructor($target) {
//   const keywords = getItem("keywords");
//   const data = getItem("data");

//   const loading = new Loading({
//     $target,
//   });
//   const imageInfo = new ImageInfo({
//     $target,
//     data: {
//       visible: false,
//       image: null,
//     },
//   });
//   const searchInput = new SearchInput({
//     $target,
//     keywords,
//     onSearch: async (keyword) => {
//       const loading = document.querySelector(".loading-wrapper");
//       loading.classList.toggle("hidden");
//       const response = await api.fetchCats(keyword);
//       if (!response.isError) {
//         setItem("data", response.data);
//         this.searchResult.setState(response.data);
//         loading.classList.toggle("hidden");
//         this.Recent.addRecentKeyword(keyword);
//       } else {
//         this.error.setState(response.data);
//       }
//     },
//     onRandom: async () => {
//       const loading = document.querySelector(".loading-wrapper");
//       loading.classList.toggle("hidden");
//       console.log("first");

//       const response = await api.fetchRandomCats();
//       console.log("second");
//       console.log(response.data);
//       if (!response.isError) {
//         setItem("data", response.data);
//         console.log(searchResult, "서치리졸트");
//         searchResult.setState(response.data);
//         loading.classList.toggle("hidden");
//       } else {
//         this.error.setState(response.data);
//       }
//     },
//   });
//   const searchResult = new SearchResult({
//     $target,
//     initialData: data || [], // 세션에 있는 데이터가 없으면 빈배열을 전달
//     onClick: (image) => {
//       this.imageInfo.setState({
//         visible: true,
//         image,
//       });
//     },
//   });

//   const recent = new Recent({
//     $target,
//     keywords,
//     onSearch: async (keyword) => {
//       const loading = document.querySelector(".loading-wrapper");
//       loading.classList.toggle("hidden");
//       const response = await api.fetchCats(keyword);
//       if (!response.isError) {
//         setItem("data", response.data);
//         this.searchResult.setState(response.data);
//         loading.classList.toggle("hidden");
//       } else {
//         this.error.setState(response.data);
//       }
//     },
//   });

//   const error = new Error({
//     $target,
//   });
// }
