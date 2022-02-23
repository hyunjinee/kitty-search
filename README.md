<h1 align="center">kitty search</h1>
<p align="center">프로그래머스 2020 Dev-Matching: 웹 프론트엔드 개발자 (상반기) 과제<br/> Vanilla JS 고양이 사진 검색 사이트</p>
<p align="center"><a href="https://kitty-search.netlify.app/" target="_blank">DEMO</a></p>

![image](https://user-images.githubusercontent.com/63354527/155165866-755d2179-9d03-4e82-b5a7-0f581f9856c0.png)

<hr>

본 레포는 **[프로그래머스 2020 Dev-Matching: 웹 프론트엔드 개발자 (상반기)](https://programmers.co.kr/competitions/131/2020-web-fe-first)** 과제를 복기한 결과물이며, 다른분들의 풀이와 제 생각을 기록해 두었습니다.

## 풀이

### HTML, CSS 관련

<details>
<summary>현재 HTML 코드가 전체적으로 div 로만 이루어져 있습니다. 이 마크업을 시맨틱한 방법으로 변경해야 합니다.</summary>
section, article 등 semantic 요소로 바꿔주었습니다.
</details>
<details>
<summary>유저가 사용하는 디바이스의 가로 길이에 따라 검색결과의 row 당 column 갯수를 적절히 변경해주어야 합니다.
</summary>
css media query를 사용했습니다.
<pre>
@media only screen and (max-width: 768px) {
  .SearchResult {
    grid-template-columns: repeat(2, 1fr);
  }
  .ImageInfo .content-wrapper {
    width: 100%;
  }
}
</pre>
</details>
<details>
<summary>
Dark Mode
</summary>
<pre>
- prefer-color-scheme (CSS를 사용해 사용자 OS 테마감지)
- Attribute 추가 (dom 의 document.documentElement 에 color-theme 추가)
- localStorage에 유저 선호 테마 저장
</pre>
</details>

### 이미지 상세 보기 모달 관련

<details>
<summary>디바이스 가로 길이가 768px 이하인 경우, 모달의 가로 길이를 디바이스 가로 길이만큼 늘려야 합니다.</summary>
css media query를 사용했습니다.
</details>
<details>
<summary>
이미지를 검색한 후 결과로 주어진 이미지를 클릭하면 모달이 뜨는데, 모달 영역 밖을 누르거나 / 키보드의 ESC 키를 누르거나 / 모달 우측의 닫기(x) 버튼을 누르면 닫히도록 수정해야 합니다.
</summary>
돔을 선택하고 이벤트를 추가하는 방법을 사용했습니다. (CSS 토글)
</details>
<details>
<summary>
모달에서 고양이의 성격, 태생 정보를 렌더링합니다. 해당 정보는 /cats/:id 를 통해 불러와야 합니다.
</summary>
<pre>
//api.js
fetchCatDetails: async (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
}
</pre>
</details>
<details>
<summary>
모달 열고 닫기에 fade in/out을 적용해주세요.
</summary>
css opacity 속성을 사용했습니다.
<pre>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</pre>
</details>

### 검색 페이지 관련

<details>
<summary>페이지 진입 시 포커스가 input 에 가도록 처리하고, 키워드를 입력한 상태에서 input 을 클릭할 시에는 기존에 입력되어 있던 키워드가 삭제되도록 만들어야 합니다.</summary>
<pre>
this.$searchInput.focus();
// dom을 선택하고 focus()함수 호출
</pre>
키워드가 있던 상태에서 다시 인풋을 클릭할 때 기존에 입력되었던 키워드를 삭제하려면?
<pre>
// SearchInput.js
this.$searchInput.addEventListener("focus", (e) => {
      e.target.value = "";
});
</pre>
추가로 input에 outline none 속성을 줘서 파란색 테두리를 제거합니다.
</details>
<details>
<summary>데이터를 불러오는 중일 때, 현재 데이터를 불러오는 중임을 유저에게 알리는 UI를 추가해야 합니다.</summary>
로딩 컴포넌트를 만들어서 해결합니다.
</details>
<details>
<summary>필수 검색 결과가 없는 경우, 유저가 불편함을 느끼지 않도록 UI적인 적절한 처리가 필요합니다.</summary>
error 페이지를 만들었습니다. 에러데이터에 따라서 status code 와 에러 메시지를 보여주고, 사용자가 뒤로가기를 누른다면 page를 새로고침하도록 location.reload() 함수를 사용했습니다.

![스크린샷 2022-02-22 오후 10 14 22](https://user-images.githubusercontent.com/63354527/155139936-e73bbece-189e-46c1-bb84-299ce763b95b.png)

</details>
<details>
<summary>최근 검색한 키워드를 SearchInput 아래에 표시되도록 만들고, 해당 영역에 표시된 특정 키워드를 누르면 그 키워드로 검색이 일어나도록 만듭니다. 단, 가장 최근에 검색한 5개의 키워드만 노출되도록 합니다.</summary>
우선 Recent라는 컴포넌트를 만들었습니다. 거기에 App에서 관리하는 컴포넌트의 상태를 주입해서 사용했습니다. recent목록을 클릭하면 search 가 되도록 함수도 전달합니다. recent 처리는 shift, includes 함수를 이용하여 처리했습니다.
<pre>
if (this.recent.includes(keyword)) return;
if (this.recent.length == 5) this.recent.shift();
this.recent.push(keyword);
setItem("keywords", this.recent);
this.render()
</pre>
</details>
<details>
<summary>
페이지를 새로고침해도 마지막 검색 결과 화면이 유지되도록 처리합니다.
</summary>
sessionStorage를 이용해 해결 했습니다.
sessionStorage와 localStorage에 대한 내용은 아래 링크를 참고하세요.
</details>
<details>
<summary>필수 SearchInput 옆에 버튼을 하나 배치하고, 이 버튼을 클릭할 시 /api/cats/random50 을 호출하여 화면에 뿌리는 기능을 추가합니다. 버튼의 이름은 마음대로 정합니다.</summary>
SearchInput 컴포넌트에 버튼을 하나 만들어서 해결했습니다.
</details>
<details>
<summary>
lazy load 개념을 이용하여, 이미지가 화면에 보여야 할 시점에 load 되도록 처리해야 합니다.
</summary>
lazy load를 다양한 방법으로 구현할 수 있습니다. 여기서는IntersectionObserver API를 이용하여 구현하였습니다. IntersectionObserver는 이미지가 화면에 보여지는 시점에 이미지를 로드하는 기능을 제공합니다. 
자세한 내용은 아래에서 다루겠습니다.
</details>
<details>
<summary>
검색 결과 각 아이템에 마우스 오버시 고양이 이름을 노출합니다.
</summary>
position absolute를 통해 글자가 가운데 오도록 했고, 이벤트를 적용해서 글자를 노출하도록 하였습니다.
<pre>
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
</pre>
</details>

### 스크롤 페이징 구현

<details>
<summary>
검색 결과 화면에서 유저가 브라우저 스크롤 바를 끝까지 이동시켰을 경우, 그 다음 페이지를 로딩하도록 만들어야 합니다.
</summary>
lazy loading을 활용해서 유저의 스크롤바가 아래에 닿으면 다음 이미지를 로딩하도록 했습니다.
</details>

## 더 나아가기

- [x] 이 과제에는 Procfile 주어져 있습니다. Procfile에 대해서 알아보세요.
- [x] 이 과제에는 test 폴더도 있습니다. jest를 사용해서 어플리케이션을 테스트 해보세요.

## 프로젝트 하면서 겪은 과정들

- [localStorage와 sessionStorage](https://hyunjinee.tistory.com/12)
- [InterSection Observer](https://hyunjinee.tistory.com/15)
- [throttle과 debounce](https://hyunjinee.tistory.com/16)

## 더 읽을거리

- [jijaee님의 Dark Mode](https://velog.io/@yijaee/%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [kellis님의 Debounce & Throttle](https://kellis.tistory.com/142)
- [y0c님의 IntersectionObserver](https://y0c.github.io/2019/06/30/react-infinite-scroll/)
- [doondoony님의 InterscetionObserver](https://velog.io/@doondoony/IntersectionObserver)
- [suyeonme님의 리액트에서 infinite scroll](https://velog.io/@suyeonme/react-Infinite-Scroll-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [서정국님의 javascript this binding](https://medium.com/sjk5766/javascript-this-binding-%EC%A0%95%EB%A6%AC-ae84e2499962)
- [DaleSea님의 Jest로 기본적인 테스트 작성하기](https://www.daleseo.com/jest-basic/)
- [오늘의코드님의 Heroku](https://todaycode.tistory.com/22)
- [Modern JavaScript tutorial fetch](https://ko.javascript.info/fetch)

## 참고

- [woohyeonjo님 풀이](https://github.com/woohyeonjo/ilovecat-javascript)
- [hanamee님 풀이](https://github.com/hanameee/vanillaJSKitty)
