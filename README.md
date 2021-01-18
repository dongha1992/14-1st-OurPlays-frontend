
# 프로젝트 영상

https://www.youtube.com/watch?v=aPFeH9Arw9Q


# 프로젝트 요약

#### 1) 소개
- hourplace라는 장소 렌탈 플랫폼을 클론 코딩
- 백엔드와 프론트엔드의 협업을 통해 실질적으로 웹이 만들어지는 플로우를 이해 
- [hourplace 보러가기](https://hourplace.co.kr/)

 

#### 2) 기간

- 20.11.16 ~ 20.11.27 (12일간)

 

#### 3) 인원

- 프론트엔드 2명, 백엔드 3명

 

#### 4) 역할

- 프론트엔드

# 사용 스택


### 프론트 엔드

1) React

- CRA를 사용하여 프로젝트 세팅

- 함수형 컴포넌트의 이해를 높이기 위해 클래스형 컴포넌트 사용

- react-router-dom, react-slick, react-dates,react-moment, react-rating-stars-component, react-select 등 다양한 라이브러리를 사용을 통해 효율적인 UI를 구성

2) JavaScript(ES6)

 
3) Sass(SCSS)


### 백엔드

1) Django / Python
2) Database Modeling (AQueryTool)
3) KAKAO map API, Naver cloud, postmand


### 공통

1) Git / Github
2) Trello
3) Slack

# 프로젝트에서 수행한 역할

### 0) Sign Up

![](https://images.velog.io/images/dongha1992/post/85e94be4-5069-4ce8-be59-95c9444bb85b/high_email.gif)

![](https://images.velog.io/images/dongha1992/post/74bc9441-b762-4976-a162-1eed64f6f02e/high_dupli.gif)

![](https://images.velog.io/images/dongha1992/post/0b41680d-149d-45ad-8c42-1df41b670313/high_password.gif)


- 유효성 검사에 맞지 않을 시 검사별로 다른 애니메이션 alert 효과 추가

- 사용자가 다중 문항을 체크하는 form에서 object형태로 데이터를 담아 백엔드로 전송

- fetch를 통해 백엔드에게 데이터 송신 및 localstorage에 token 저장

### 1) Navigation (기능만)


![](https://images.velog.io/images/dongha1992/post/96c5a538-c0a2-4870-9421-7edb68ce924a/main-plz.gif)

- scroll을 감지해서 navgation이 변하는 sticky 적용

- hourplace의 딱딱한 sticy navagation 대신 opacity를 이용하여 부드럽게 변형

- scroll이 내려갈 때 배경화면과 content가 다르게 움직이는 landing 효과 적용

### 2) Main 


![](https://images.velog.io/images/dongha1992/post/1a0abed8-59ac-460d-93f7-1ef13b6f5169/new_slider.gif)


- 라이브러리 없이 대표 이미지를 넘겨 볼 수 있는 slider 기능 적용

- **hourplace의 정적인 이미지 슬라이더 대신 scale과 opacity를 적용하여 동적인 slider로 재해석**

- router를 이용하여 이미지 클릭시 detail로 이동



### 3) Category (기능만)

![](https://images.velog.io/images/dongha1992/post/ff6896a7-5bf9-4c48-976c-998a7fe94dfb/catetetet.gif)

- 백엔드로부터 query parameter를 query-string를 이용하여 알맞은 데이터를 렌더 / path parameter와 query parameter를 구분하여 사용

### 4) Product Detaill

![](https://images.velog.io/images/dongha1992/post/5dce1cd8-c1ef-4fca-9ee6-0a0038a64eb2/detail11.gif)

- router를 사용하여 알맞은 데이터 호출

- react-slick를 이용하여 슬라이더 구성

- react-dates를 이용하여 달력 구현 및 달력에 입력된 정보 로컬에 저장 및 백엔드에 전송 

- react-select 이용하여 input에 입력된 정보 로컬에 저장 및 백엔드에 전송 

- 카카오맵 API를 이용하여 백엔드로 받은 지도 정보를 마커로 표시


![](https://images.velog.io/images/dongha1992/post/060e7f9f-127d-413c-a6e2-9afc41b5c408/review1.gif)

- react-rating-stars-component를 이용하여 별점 생성

- 백엔드로부터 별점 평균을 받아 별 개수로 구현 / 사용자가 올린 별점을 숫자로 변환 /로컬에 ratings 정보를 저장해 서버와 rating 일치

- modal창을 활용하여 리뷰 등록 및 삭제 


![](https://images.velog.io/images/dongha1992/post/dd0d94e2-d689-4c84-b820-a2b3ca60877a/hhhhhhh.gif)

- 리뷰 리스트만 개별적으로 API 호출 후 pagination / 리뷰 등록과 동시에 pagination이 될 수 있도록 componentDidUpdate 활용

- **hourplace의 리뷰 UI를 그대로 클론하기 보다 에어비앤비를 참고하여 나만의 방식으로 UI 해석**


### 5) Book Mark

![](https://images.velog.io/images/dongha1992/post/f258533d-c837-49ad-a2b4-c82670ee9e2b/book1.gif)

- Book Mark 버튼 클릭시 백엔드로 데이터 전송 / 페이지 이동 후 북마크 API를 받아 렌더

### 6) Reservation

![](https://images.velog.io/images/dongha1992/post/e4137547-709b-46f7-ab19-a054f6520993/reservation3.gif)

- 사용자가 날짜, 시간, 인원을 선택하면 백엔드로 데이터 전송 / 페이지 이동 후 예약관리 API를 받아 렌더. 예약 취소시 PATCH 메서드로 예약 취소로 변경.

### 6) Upload Image

![](https://images.velog.io/images/dongha1992/post/1f59b862-dede-4677-8e0a-ab06e4e2722b/uploadimg.gif)

- 백엔드에 form-data 형식으로 데이터 전송 / fetch의 Content-Type에 대한 이해

**이미지를 저장할 클라우드 서버를 찾지 못해 백엔드에서 전송한 이미지 url를 받는 것은 실패!**

### 7) SMS authentication

- 사용자가 입력한 이름과 휴대폰 번호를 백엔드에 전송해 사용자의 핸드폰에 인증번호 발송 / 그 번호를 다시 서버에 전송해 유효 여부 판단

**서버를 aws에 올리면서 현재 문자 인증은 안되는 상태**

### 마무리

![](https://images.velog.io/images/dongha1992/post/70440dae-64dc-44d7-8aed-78ec7f61e270/chchch.gif)

