import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')}; 
`;   

//스타일 확장
const StyledAddButton = styled(StyledDeleteButton)`
color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')}; 
background-color:green;
`;

// function 방식
// class 방식
const  Home = (props) => {
    // const boards = props.boards;
    // const id = props.id;

    //구조분할 할당
    const { boards , id, setBoards, user, number, setNumber} = props;
    
    console.log(1, id);
    console.log(2, boards);

    const addNumber= () => {
        setNumber(number+1)
    }

    return (
        <div>
            <h1>홈 : {number}</h1>
            <Button variant="primary">Primary</Button>      
            <StyledAddButton user={user} onClick={addNumber}>번호증가</StyledAddButton>
            <StyledDeleteButton user={user} onClick={()=>setBoards([])}>전체삭제</StyledDeleteButton>
            {boards.map((board) => (<h3>제목 : {board.title} 내용 : {board.content} </h3>))}
        </div>
    );
};

export default Home;