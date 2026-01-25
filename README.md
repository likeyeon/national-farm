# 국립농산물품질관리원

<img width="100%" height="auto" alt="Image" src="https://github.com/user-attachments/assets/6df752bd-736d-4842-a0a8-7d609c694dd4" />

- URL : https://national-farm.vercel.app

<br>

## 프로젝트 소개

- 국립농산물품질관리원 웹사이트를 클론 코딩한 개인 프로젝트입니다.
- 다양한 사용자 환경에서도 일관된 경험을 제공해야 하는 공공기관 웹사이트의 특성을 고려하여, 웹 접근성과 크로스 브라우징을 중점적으로 개선했습니다.
- 화면 사이즈에 따라 자동으로 맞춰지는 반응형 웹사이트로 구현했습니다.

<br>

## 1. 개발 환경

- 사용 스킬 : HTML5, SCSS, JavaScript, Webpack, Babel
- 버전 관리 : Github
- 배포 환경 : Vercel

<br>

## 2. 채택한 개발 기술

### SCSS

- 재사용성이 높고 유지보수가 쉬운 스타일 작성을 고려하였습니다.
- 자주 사용되는 동일한 스타일을 %placeholder로 컴포넌트화해서 조금씩 변형을 주면서 재사용했습니다
- flexbox, 미디어 쿼리와 같이 자주 쓰이면서 길이가 긴 스타일을 mixin으로 간편하게 적용했습니다.

### EsLint, Prettier

- 코드 품질을 높이고 일관된 형식을 유지하기 위해 사용하였습니다.
- EsLint는 코드 품질 관리, Prettier는 일관된 코드 스타일을 담당합니다.

### Webpack, Babel

- IE와 같은 구형 브라우저에서도 정상적으로 동작하도록 Webpack과 Babel을 설치하여 트랜스파일링 및 번들링 환경을 구성했습니다.
- **Babel**을 사용하여 ES6+ 문법으로 작성된 자바스크립트 코드를 구형 브라우저에서도 실행 가능한 ES5 문법으로 변환했습니다.
- Fetch API는 문법 변환만으로는 지원이 안되기 때문에, **babel-polyfill**을 추가하여 Fetch API를 지원하지 않는 환경에서도 동작하도록 보완하였습니다.
- **Webpack의 babel-loader**를 적용해 빌드 단계에서 자바스크립트 파일을 자동으로 트랜스파일링하고, 여러 개의 스크립트를 하나의 번들 파일로 관리했습니다.

<br>

## 3. 프로젝트 구조

```
📦national-farm
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜banner-icon.png
 ┃ ┃ ┃ ┣ 📜home.svg
 ┃ ┃ ┃ ┣ 📜lang.svg
 ┃ ┃ ┃    .
 ┃ ┃ ┃    .
 ┃ ┃ ┃    .
 ┃ ┃ ┣ 📜banner-slide-01.png
 ┃ ┃ ┣ 📜banner-slide-02.png
 ┃ ┃ ┣ 📜banner-slide-03.png
 ┃ ┃    .
 ┃ ┃    .
 ┃ ┃    .
 ┣ 📂data
 ┃ ┗ 📜news-data.json
 ┣ 📂dist
 ┃ ┗ 📂js
 ┃ ┃ ┗ 📜bundle.js
 ┣ 📂js
 ┃ ┣ 📜banner-swiper.js
 ┃ ┣ 📜drawer-nav.js
 ┃ ┣ 📜drawer.js
 ┃ ┣ 📜gnb-select.js
 ┃ ┣ 📜keycode.js
 ┃ ┣ 📜lnb-hover.js
 ┃ ┣ 📜news-render.js
 ┃ ┣ 📜news-tab.js
 ┃ ┣ 📜popup-swiper.js
 ┃ ┣ 📜scroll-top.js
 ┃ ┣ 📜swiper.js
 ┃ ┗ 📜visual-swiper.js
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_global.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_normalize.scss
 ┃ ┃ ┗ 📜_reset.scss
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜_banner-collect.scss
 ┃ ┃ ┣ 📜_help.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_main-work.scss
 ┃ ┃ ┣ 📜_news.scss
 ┃ ┃ ┣ 📜_popup-banner.scss
 ┃ ┃ ┣ 📜_right-box.scss
 ┃ ┃ ┣ 📜_swiper.scss
 ┃ ┃ ┣ 📜_visual-banner.scss
 ┃ ┃ ┗ 📜_visual-info.scss
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜_breakpoint.scss
 ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┣ 📜_dimensions.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_typography.scss
 ┃ ┃ ┗ 📜_z-indexes.scss
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜_drawer-nav.scss
 ┃ ┃ ┣ 📜_drawer.scss
 ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┣ 📜_grid.scss
 ┃ ┃ ┣ 📜_header-lnb.scss
 ┃ ┃ ┣ 📜_header-main.scss
 ┃ ┃ ┣ 📜_header-top.scss
 ┃ ┃ ┣ 📜_header.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_main.scss
 ┃ ┃ ┣ 📜_overlay.scss
 ┃ ┃ ┣ 📜_scroll-top.scss
 ┃ ┃ ┗ 📜_skip.scss
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ 📜_compatibility.scss
 ┃ ┃ ┣ 📜_flexbox.scss
 ┃ ┃ ┣ 📜_index.scss
 ┃ ┃ ┣ 📜_position.scss
 ┃ ┃ ┗ 📜_responsive.scss
 ┃ ┗ 📜main.scss
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜.stylelintrc.json
 ┣ 📜apple-touch-icon.png
 ┣ 📜babel.config.json
 ┣ 📜eslint.config.mjs
 ┣ 📜favicon-96x96.png
 ┣ 📜favicon.ico
 ┣ 📜favicon.svg
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜site.webmanifest
 ┣ 📜style.css
 ┣ 📜style.css.map
 ┣ 📜web-app-manifest-192x192.png
 ┣ 📜web-app-manifest-512x512.png
 ┗ 📜webpack.config.js
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 2025.10.13 ~ 2026.11.02

### 작업 관리

- Notion으로 작업 일지를 작성하고 트러블 슈팅, 신경 쓴 부분에 대해 추가로 정리하였습니다.

<br>

## 5. 신경 쓴 부분

- <a href="https://clever-boot-479.notion.site/Swiper-2ed97743ec4980429237e97b21c1a2ed?source=copy_link">Swiper 접근성 향상</a>

<br>

## 6. 구현 목록

### [헤더]

- GNB 메뉴에 마우스 호버 시 해당되는 LNB가 나타나도록 구현했습니다.
- keyup, keydown 이벤트를 활용해서 키보드로도 GNB, LNB 아이템에 자유롭게 접근할 수 있도록 구현하여 접근성을 고려했습니다.
  - **Enter:** 링크 클릭
  - **화살표 키(→, ←):** GNB 메뉴 간 이동
  - **Tab / Shift + Tab:** LNB 하위 메뉴 간 순차적 이동 (Tab은 다음, Shift+Tab은 이전)

| 헤더 |
| -- |
| ![national-readme-header](https://github.com/user-attachments/assets/bf2444cf-c2b9-4abb-8f84-087ec2acfc21) |

<br>

### [무한 롤링 슬라이드]

- Swiper 라이브러리를 사용하여 무한 롤링 슬라이드를 구현했습니다.
- 슬라이드 넘김 및 재생 제어가 가능하도록 구성하고, 현재 몇 번째 슬라이드인지 알 수 있도록 페이지네이션 숫자를 커스텀했습니다.
- focusin, focusout 이벤트를 활용해서 키보드로도 슬라이드를 조작할 수 있도록 구현하여 접근성을 고려했습니다.
  - **Enter:** 버튼 클릭
  - **Tab / Shift + Tab:** 요소 간 순차적 이동 (Tab은 다음, Shift+Tab은 이전)

| 메인 배너 슬라이드 |
| -- |
| ![national-readme-slide](https://github.com/user-attachments/assets/c1fd18f4-2f9b-497d-afd1-8c7d9ca804b6) |

| 하단 배너 슬라이드 |
| -- |
| ![national-readme-bannerSlide](https://github.com/user-attachments/assets/93c0c845-c659-42a2-90f2-66de1aa67961) |

<br>

### [게시판 탭]

- fetch() 함수로 JSON 파일에 입력해둔 데이터를 가져온 후 JavaScript 객체로 변환해 가공하여 게시글 아이템으로 출력했습니다.
- keydown 이벤트를 활용해서 키보드로도 탭을 조작할 수 있도록 구현하여 접근성을 고려했습니다.
  - **Enter:** 링크 클릭
  - **화살표 키(→, ←):** 탭 메뉴 간 이동
  - **Home:** 탭 메뉴에 포커스가 있으면 첫 번째 탭으로 포커스 이동
  - **End:** 탭 메뉴에 포커스가 있으면 마지막 탭으로 포커스 이동
  - **Tab / Shift + Tab:** 요소 간 순차적 이동 (Tab은 다음, Shift+Tab은 이전)
    - 탭 메뉴에 포커스가 있으면 해당 게시글 아이템으로 포커스 이동

| 게시판 탭                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ |
| ![national-readme-boardTab](https://github.com/user-attachments/assets/8b179a0a-9937-4da9-a46e-6c6124775d1e) |

<br>

### [본문 바로가기]

- 화면에 진입한 뒤 Tab 키를 누르면 ‘본문 바로가기’ 링크가 노출되며, Enter 입력 시 본문으로 건너뛰도록 구현해 스크린 리더 사용자의 불필요한 헤더 탐색을 줄였습니다.

| 본문 바로가기                                                                                            |
| -------------------------------------------------------------------------------------------------------- |
| ![national-readme-skip](https://github.com/user-attachments/assets/03e82100-bf58-4430-a6ef-aed4deeb1a07) |

<br>

## 7. WAVE 접근성 진단

### 결과

- WAVE 웹 접근성 진단 도구 : https://wave.webaim.org/

| 수정 전 | 수정 후 |
| -- | -- |
| <img width="352" height="618" alt="image" src="https://github.com/user-attachments/assets/eb631ef2-d357-46ac-b552-4e5eddded7cf" /> | <img width="371" height="408" alt="image" src="https://github.com/user-attachments/assets/99cbb49e-f1c2-498a-849c-62eda8b57a6a" /> |

(※ Alerts 항목은 클론코딩 특성상 모든 링크를 '/'로 통일하면서 발생한 경고입니다.)

<br>

### 개선 내용
- 이미지 대체 텍스트 (alt)
  - 모든 이미지에 적절한 대체 텍스트를 추가했습니다.
  - 대체 텍스트의 길이가 너무 긴 경우 간결하게 수정했습니다.
- 폼 접근성
  - input 요소에 대응되는 label 태그를 추가했습니다.
- 색상 대비
  - 색상 대비가 낮은 요소는 WCAG 최소 대비 기준에 맞게 수정했습니다.
- 제목 태그 구조
  - 단계를 건너뛴 제목 태그를 순차적으로 재구성했습니다.
  - 소제목 역할로 판단되는 일반 요소를 h3 태그로 수정했습니다.

<br>

## 8. 트러블 슈팅

- <a href="https://clever-boot-479.notion.site/focus-outline-2ed97743ec4980daad92e61b3a668f98?source=copy_link">focus시 outline이 사라지는 이슈</a>
