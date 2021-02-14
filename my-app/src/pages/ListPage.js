import {React, useState} from 'react';
import styled, { css } from 'styled-components';

const StyledItemBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    align-items: center;
`; 

const ListPage = () => {

    const [post, setPost] = useState({
        id: '',
        title:'',
        content:''
    });

    const [posts, setPosts] = useState([
        {id:1, title:"제목1", content:"내용1"},
        {id:2, title:"제목2", content:"내용2"},
        {id:3, title:"제목3", content:"내용3"},
        {id:4, title:"제목4", content:"내용4"},
        {id:5, title:"제목5", content:"내용5"},
    ]);

    const [no, setNo] = useState(6);
    
    const handleWrite = (e) => {
        //ListPage의 setPosts에 무엇을 담아야 하나?
        console.log(1, post.title);
        console.log(2, post.content);
        console.log(3, post.id);
        e.preventDefault();  // form태그가 하려는 액션을 중지시켜야 함.
        //setNo(no+1);
        //setPost([...post, no]);
        setPosts([...posts, post]);
        setNo(no+1);
    }

    const handleDelete = (e) => {
        console.log(e.target.value);
        console.log(posts.filter((post)=>post.id!=e.target.value));
        console.log(posts.length);
        setPosts(posts.filter((post)=>post.id!=e.target.value));
        console.log(posts);
    }

    const handleChangeTitle = (e) => {
        console.log(e.target.value);
        setPost({title: e.target.value});
    }

    const handleChangeContent = (e) => {
        console.log(e.target.value);
        setPost({content: e.target.value});
    }

    const handleForm = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        console.log("id:"+ no);

        // computed property names 문법 (키값 동적할당)
        setPost({
            ...post,
            id : no,
            [e.target.name] : e.target.value,
        });
    }

    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                <input type="text" placeholder="제목을 입력하세요." value={post.title} onChange={handleForm} name="title" />
                <input type="text" placeholder="내용을 입력하세요."  value={post.content} onChange={handleForm} name="content"/>
                <button type="button"onClick={handleWrite}>글쓰기</button>
            </form>
            <hr/>
            {posts.map((post) => (
                <StyledItemBoxDiv>
                    <div>
                    번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}
                    </div>
                    <button type="button" value={post.id} onClick={handleDelete}>삭제</button>
                </StyledItemBoxDiv>
            ))}
        </div>   
    );
};

export default ListPage;