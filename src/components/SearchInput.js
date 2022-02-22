import { setItem } from "../utils/sessionStorage.js";

const TEMPLATE = '<input type="text">';
class SearchInput {
  constructor({ $target, keywords, onSearch, onRandom }) {
    this.$target = $target;
    this.keywords = keywords;
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.$searchWrapper = document.createElement("section");
    this.$searchRandom = document.createElement("div");
    this.$searchInput = document.createElement("input");
    this.$searchRecentWrapper = document.createElement("div");
    this.$darkMode = document.createElement("span");

    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    this.$searchWrapper.className = "SearchWrapper";
    this.$searchInput.className = "SearchInput";
    this.$searchRandom.className = "SearchRandom";
    this.$searchRecentWrapper.className = "SearchRecentWrapper";
    this.$darkMode.className = "DarkModeBtn";
    this.$darkMode.innerText = "🌕";

    this.$searchWrapper.appendChild(this.$searchRandom);
    this.$searchWrapper.appendChild(this.$searchInput);
    this.$searchWrapper.appendChild(this.$darkMode);
    this.$target.appendChild(this.$searchWrapper);
    this.$target.appendChild(this.$searchRecentWrapper);

    // ! focus on input
    this.$searchInput.focus();

    // ! clear the input when focus on input
    this.$searchInput.addEventListener("focus", (e) => {
      e.target.value = "";
    });

    this.$searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        this.addRecentKeyword(e.target.value);
      }
    });
    // ! random fetching button
    this.$searchRandom.innerText = "😽";
    this.$searchRandom.addEventListener("click", this.onRandom);
    this.render();

    console.log("SearchInput created.", this);
  }

  addRecentKeyword(keyword) {
    if (this.keywords.includes(keyword)) return;
    if (this.keywords.length == 5) this.keywords.shift();
    this.keywords.push(keyword);
    setItem("keywords", this.keywords);
    this.render();
  }

  render() {
    this.$searchRecentWrapper.innerHTML = "";
    if (!this.keywords) return;
    this.keywords.map((keyword) => {
      const word = document.createElement("span");
      word.className = "keyword";
      word.innerText = keyword;
      word.addEventListener("click", (e) => {
        this.onSearch(e.target.innerText);
      });
      this.$searchRecentWrapper.appendChild(word);
    });
  }
}

export default SearchInput;
