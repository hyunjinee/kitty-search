console.log("Loading created.");

class Loading {
  constructor({ $target }) {
    this.$loadingWrapper = document.createElement("div");
    this.$loadingWrapper.classList.add("LoadingWrapper");
    this.$loadingWrapper.classList.add("hidden");

    $target.append(this.$loadingWrapper);

    this.render();
  }

  toggleLoading() {
    console.log("toggle실행");
    const target = document.querySelector(".LoadingWrapper");
    target.classList.toggle("hidden");
  }

  show() {
    const target = document.querySelector(".LoadingWrapper");
    target.classList.remove("hidden");
  }

  hide() {
    const target = document.querySelector(".LoadingWrapper");
    target.classList.add("hidden");
  }

  destory() {
    this.$loadingWrapper.remove();
  }

  render() {
    this.$loadingImage = document.createElement("img");
    this.$loadingImage.classList.add("LoadingImage");
    this.$loadingImage.src = "src/img/loading.gif";

    this.$loadingWrapper.appendChild(this.$loadingImage);
    this.$loadingWrapper.addEventListener("click", this.toggleLoading);
  }
}

export default Loading;
