// 액션
export const increase = (username) => ({ type:"INCREMENT", payload: username});
export const decrease = () => ({type: "DECREMENT"});

// 상태
const initstate = {
    username: "",
    number: 1,
}

//액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
    switch(action.type){
        case "INCREMENT":
            return {number:state.number+1, username: action.payload};  // return되면 그것을 호출된 쪽에서 받는 것이 아니라 return되는 순간 ui변경(state변경)
        case "DECREMENT":
            return {number: state.number -1};
        default:
            return state;
    }
}

export default reducer;

