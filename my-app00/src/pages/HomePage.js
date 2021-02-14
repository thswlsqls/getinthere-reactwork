import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {

    // http 요청 (jquery ajax(x), fetch, axios(다운))
    const [boards, setBoards] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    // 빈 배열 한번만 실행
    useEffect(() => {
        //다운로드 가정 -> fetch(), axios(), ajax()
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ];
        let userData = {id:1, username:"ssar", age:"30"};

        // 빈데이터
        setBoards([...data]);
        setUser({...userData});
    }, [])

    return (
            <Home boards = {boards} user = {user} id={1} setBoards={setBoards} number={number} setNumber={setNumber}/> 
    );
};

export default HomePage;