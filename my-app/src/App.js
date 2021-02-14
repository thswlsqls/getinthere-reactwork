import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Sub from './Sub';
import Third from './aa/Third';
import { Sub_num } from './Sub';
import './App.css';
import styled from 'styled-components';
import { Title } from './MyCss';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';

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

function App() {

  // 랜더링 시점 = 상태값 변경
  return  (
  <div>
        <ListPage />
  </div>
  );
}

export default App;
