import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Sub from './Sub';
import Third from './aa/Third';
import { Sub_num } from './Sub';
import './App.css';
import styled from 'styled-components';
import { Title } from './MyCss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/login/Login';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

// 글쓰기, 글삭제, 글목록보기


// 0. React 엔진 - 데이터변경감지에서 UI 그려주는 엔진이다.
// 1. 실행과정 (index.html) - SPA
// 2. JSX문법
// 3. 바벨(자바스크립트 ES5) ->ES6

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선은은 let 혹은 const로 해야함
// (3) if 사용불가능 -> 삼항연산자사용가능 (조건 ? 값(true) : 값(flase))
// (4) 조건부 렌더링 (조건 && 값(true))
// (5) css디자인
// -내부에 적는 방법
// -외부 파일에 적는 방법
// -라이브러리 사용(부트스트랩, component-styled)

let a = 10; //변수
const b = 20; //상수

// useMemo => 메모라이제이션(기억)

const mystyle2 = {
  backgroundColor: 'red',

};

let T = document.createElement("h1");
T.style.color = 'red';
// t.style = {
//   fontsize: "1.5em",
//   textalign: "center",
//   color: "palevioletred",
// }

function App() {

  const [list, setList] = useState([1,2,3,4]);
  const [str, setStr] = useState("합계");
 
  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log("sum함수 실행됨 : ", sum);
    return sum;
  };

  const addResult = useMemo(()=>getAddResult(), [list]);

  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download2 = () => {
    //다운로드 받고 (통신)
     let download2Data = 5; // 가정
     setData(download2Data);
  }

  // 실행시점 : 
  // (1) App()함수가 최초 실행될 때 (그림이 최초로 그려질 때)
  // (2) 상태 변수가 변경될 때 (그게 dependencyList에 등록되어 있어야함)
  // (3) 의존리스트 관리를 할 수 있다.
  
  useEffect(()=>{
    console.log("useEffect 실행됨"); 
    download2();
  }, [search]);

  // 다운로드 받음
  console.log("App 실행됨");

  const [num, setNum] = useState(5);

  let sample = [
    {id:1, name:"홍길동"},
    {id:2, name:"임꺽정"},
    {id:3, name:"장보고"},
    {id:4, name:"코스"}
  ];
  const [users, setUsers] = useState(sample); // 레퍼런스가 변경되어야 동작!!

  const download = () => {

    //기존 데이터 세팅
    // const a = sample.concat({id:5, name:"조자룡"});
    // console.log(sample);
    //fetch().then().then();
    setUsers([...sample, {id:num, name:"조자룡"}]); 
    setNum(num+1);
  };

  let c;
  let d = undefined;
  console.log(1, c);

  const mystyle = {
    color: "red",
  }

  //let list = [1,2,3];

  // let number = 1; //상태 값이 아님
  const [number, setNumber] = useState(2); //React안에 hooks 라이브러리

  const add = () => {
   //number++; 
   setNumber(number+1); // 리액트한테 number값 변경할게라고 요청
   console.log("add",number);
  }

  // 랜더링 시점 = 상태값 변경
  return  (
  <div>
     <Navigation />
     <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login/:id" exact={true} component={LoginPage} />
      <Route path="/list" exact={true} component={() => ListPage()} />
      <Route path="/write" exact={true} component={() => WritePage()} />
     <Footer />
      {/* <div style={Title}>안녕 {a === 10 ? "10입니다":"10이 아닙니다."}</div> */}
      <div style={T}>헬로</div>
      <div>
        <Title>헬로2</Title>
      </div>
      <h1 className="box-style">해당태그 {b === 20 &&"20입니다."}</h1>
      <hr />
      {/* <div>
        <div>{list.map((n)=> <h1>{n}</h1>)}</div>
      </div> */}
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub />
        <Third />
        { Sub_num }
        <button onClick={ () => setSearch(2)}>검색하기</button>
        <h1>데이터 : {data}</h1>
        <button onClick={()=>{ setData(data + 1);}}>더하기</button>
      </div>
      <div>
        <button onClick={download}>다운로드</button>
        {users.map((u)=> <h1>{u.id}, {u.name}</h1>)}
      </div>
      <button onClick={()=>{setStr('안녕');}}>문자 변경</button>
      <button onClick={()=>{setList([...list, 10]);}}>리스트값 추가</button>
      <div>
        {list.map((i) => (<h1>{i}</h1>))}
      </div>
      <div>{str} : {addResult}</div>
  </div>
  );
}

export default App;
