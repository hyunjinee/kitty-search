import { setItem } from "../utils/sessionStorage.js";
import { api } from "../api.js";

class Recent {
  constructor({ $target, keywords, onSearch }) {
    console.log(onSearch);
    this.recent = keywords;
    this.onSearch = onSearch;
    const recentWrapper = document.createElement("div");
    this.recentWrapper = recentWrapper;
    recentWrapper.className = "recent-wrapper";
    recentWrapper.innerText = "hi";
    $target.appendChild(recentWrapper);
    this.render();
  }

  addRecentKeyword(keyword) {
    if (this.recent.includes(keyword)) return;
    if (this.recent.length == 5) this.recent.shift();
    this.recent.push(keyword);
    setItem("keywords", this.recent);
    this.render();
  }
  // onRecentSearch(e) {
  //   const keyword = e.target.innerText;
  //   const loading = document.querySelector(".loading-wrapper");
  //   loading.classList.toggle("hidden");
  //   const response = await api.fetchCats(keyword);
  //   if (!response.isError) {
  //     setItem("data", response.data);
  //     this.searchResult.setState(response.data);
  //     loading.classList.toggle("hidden");
  //     this.Recent.addRecentKeyword(keyword);
  //   } else {
  //     this.error.setState(response.data);
  //   }
  // }

  render(onSearch) {
    this.recentWrapper.innerHTML = "";
    this.recent.map((keyword) => {
      const link = document.createElement("span");
      link.className = "keyword";
      link.innerText = keyword;
      link.addEventListener("click", (e) => {
        this.onSearch(link.innerText);
      });
      this.recentWrapper.appendChild(link);
    });
  }
}

export default Recent;
