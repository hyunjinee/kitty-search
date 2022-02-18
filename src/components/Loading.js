class Loading {
  constructor({ $target }) {
    this.loadingWrapper = document.createElement("div");
    this.loadingWrapper.className = "loading-wrapper";
    this.loadingWrapper.classList.add;
    // console.log("실행");
    // $target.appendChild(this.loadingWrapper);
    console.log($target);
    $target.appendChild(this.loadingWrapper);
    this.render();
  }

  toggleLoading() {
    const loading = document.querySelector(".loading-wrapper");
    loading.classList.toggle("hidden");
  }

  render() {
    const loadingImage = document.createElement("img");
    loadingImage.className = "loading-image";
    loadingImage.src = "src/img/loading.gif";

    this.loadingWrapper.appendChild(loadingImage);
  }
}

export default Loading;
