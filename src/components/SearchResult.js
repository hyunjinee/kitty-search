import { lazyLoad } from "../utils/lazyLoad.js";

class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    console.log("SearchResult created.");
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
    this.initiateObserver();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
    this.initiateObserver();
  }
  // ResultSection.js
  initiateObserver() {
    const options = { threshold: 0 };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          entry.target.src = entry.target.dataset.src;
        }
      });
    };
    const io = new IntersectionObserver(callback, options);
    const lazyImages = Array.from(document.getElementsByClassName("lazy"));
    lazyImages.forEach((image) => {
      io.observe(image);
    });
  }
  render() {
    // console.log("render 호출");
    // console.log(this.data, "데이터");
    if (!this.data) return;
    if (!this.data.length) {
      this.$searchResult.innerHTML = "검색 결과가 없습니다.";
      return;
    }
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
          <div class="item">
            <img data-src=${cat.url} alt=${cat.name} class="lazy"/>
          </div>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }
}

export default SearchResult;
