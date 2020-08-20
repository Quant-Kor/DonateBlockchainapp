<h1> 블록체인 기반 교내 기부 플랫폼, 기부니가 조아 </h1>
> 성균관대학교 융합캡스톤 수업 프로젝트로 진행

![ex_screenshot](./readmeimg/p.png)

<h3> 1. Member </h3>
<div id="about_team">

| 성명   	| 학과   | 역할                         	|
|--------	|-----	|-------------------------------	|
| 박신현 	| 경영학과&소프트웨어학과	| 기획 & 영상 제작 |
| 이정민 	| 경영학과&컴퓨터공학과	| 스마트 컨트랙트 & 라우팅 	|
| 정채원 	| 경영학과&소프트웨어학과	| 기획 & Front-end 개발    |


<h3> 2. Introduction </h3>
<div id="about_Introduction">
> Vision. 교내 기부 활동을 플랫폼화 함으로써 교내 동문과 학우들의 기부에 대한 접근성을 높여 선후배간 끈끈한 네트워크를 구축하는 것 <br>
> Misson. 블록체인을 적용하여, 신뢰도가 제고된 플랫폼을 만들어 기부에관한 참여율 높이기 / 편리한 UI/ UX 구축
  
  
<h3> 3. Background </h3>

![ex_screenshot](./readmeimg/g.png)


<div id="about_Background">
> a. 국내 기부 참여율의 지속적인 하락세 <br>
> b. "기부포비아" 사회 현상 확산 <br>
> Solution : 블록체인을 적용하여 문제를 해결해보는 건 어떨까?
  
<h3> 4. Why blockchain? </h3>
블록체인은 모든 기록이 투명하게 공개되고, 제 3자의 개입을 최소화 할 수 있음.<br> => 기부 과정의 투명성을 제고시켜 기부 단체의 신뢰를 회복시킬 수 있음. <br>
> Value a. 기존 중앙화된 시스템의 신뢰도 문제 해결 <br>
> Value b. 기존 시스템의 복잡한 절차 단순화 <br>
> Value c. Player들간의 교류 증진 제고
 
<h3> 5. Service Features </h3>

![ex_screenshot](./readmeimg/sf2.png)

> 기능 1 [자율장학금] <br>
: 소액을 기부금으로 생성하여 조건을 만족하는 후배에게 블록체인의 스마트 컨트랙트를 활용하여 자동으로 기부금을 전달하는 기능 <br>
> 기능 2-1 [크라우드 펀딩 장학금 -개인] <br>
: 재학생 개인이 직접 기부 받고자 하는 이유 등을 기록하고 크라우드 펀딩의 시스템을 적용하여, 선배들이 돈을 모아 장학금을 줄 수 있게 하는 기능 <br>
> 기능 2-2 [크라우드 펀딩 장학금 -그룹] <br> 
: 학회, 동아리 등 교내 학생 단체에서 직접 기부 받고자 하는 이유 등을 기록하고 크라우드 펀딩의 시스템을 적용하여, 선배들이 돈을 모아 장학금을
줄 수 있게 하는 기능

<h3> 6. How to develop</h3>
> a. Front-end : Html, CSS, Javacript로 총 9개 페이지 개발 <br>
-Index page <br>
-자율장학금 page <br> 
-크라우드펀딩(개인) page <br>
-크라우드펀딩(그룹) page <br>
-My page <br>
-신청 및 지원 팝업(4개) page <br>
> b. Smart-Contract : Ethereum Roptsten Testnet을 활용하여 개발<br>
-amount / giver / getter /typeinfo 변수 설정 <br>
> c. 서버 연결 및 라우팅 : Node.js 이용<br>
> d. Front-end와 Smart-contract 연동 : Web3.js 활용 <br>

<h3> 7. Result </h3>
Responsive WebApplication http://skkudonation.com/


