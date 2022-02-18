const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });
    this.$searchInput.focus();
    this.render();
    console.log("SearchInput created.", this);
  }
  deleteInput() {
    const search = document.querySelector(".SearchInput");
    search.value = "";
  }
  render() {
    this.$searchInput.addEventListener("focus", this.deleteInput);
  }
}

export default SearchInput;
