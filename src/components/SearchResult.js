class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    console.log("SearchResult created.");
    this.$searchResult = document.createElement("section");
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
            <span class="cat-name hidden">${cat.name}</span>
          </div>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
      $item.addEventListener("mouseover", () => {
        const $catName = $item.querySelector(".cat-name");
        $catName.style.visibility = "visible";
      });
      $item.addEventListener("mouseleave", () => {
        const $catName = $item.querySelector(".cat-name");
        $catName.style.visibility = "hidden";
      });
    });
  }
}

export default SearchResult;
