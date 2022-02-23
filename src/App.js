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

    // ! data가 없으면 random fetching
    if (!this.data) {
      (async () => {
        const loader = new Loading({ $target });
        loader.show();
        const { data } = await api.fetchRandomCats();
        setItem("data", data);
        searchResult.setState(data);
        loader.hide();
        loader.destory();
      })();
    }
    const searchInput = new SearchInput({
      $target,
      keywords,
      onSearch: async (keyword) => {
        const loader = new Loading({ $target });
        loader.show();
        const response = await api.fetchCats(keyword);
        if (response.error) {
          error.setState(response);
        }
        if (!response.data) {
          loader.hide();
          return;
        }
        setItem("data", response.data);
        searchResult.setState(response.data);
        loader.hide();
        loader.destory();
      },
      onRandom: async () => {
        const loader = new Loading({ $target });
        loader.show();
        const { data } = await api.fetchRandomCats();
        setItem("data", data);
        searchResult.setState(data);
        loader.hide();
        loader.destory();
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

    const error = new Error({ $target });

    // ! DOM에 다 그린후에, 세션 스토리지에서 데이터를 가져온다.
    searchResult.setState(this.data);
  }
}

export default App;
