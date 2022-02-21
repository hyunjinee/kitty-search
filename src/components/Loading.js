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

  render() {
    this.$loadingImage = document.createElement("img");
    this.$loadingImage.classList.add("LoadingImage");
    this.$loadingImage.src = "src/img/loading.gif";

    this.$loadingWrapper.appendChild(this.$loadingImage);
    this.$loadingWrapper.addEventListener("click", this.toggleLoading);
  }
}

export default Loading;
//class Loading {
//   constructor({ $target }) {
//     this.loadingWrapper = document.createElement("div");
//     this.loadingWrapper.className = "loading-wrapper";
//     this.loadingWrapper.classList.add("hidden");
//     $target.appendChild(this.loadingWrapper);
//     this.render();
//   }

//   toggleLoading() {
//     const loading = document.querySelector(".loading-wrapper");
//     loading.classList.toggle("hidden");
//   }

//   render() {
//     const loadingImage = document.createElement("img");
//     loadingImage.className = "loading-image";
//     loadingImage.src = "src/img/loading.gif";

//     this.loadingWrapper.appendChild(loadingImage);
//     this.loadingWrapper.addEventListener("click", this.toggleLoading);
//   }
// }

// export default Loading;
