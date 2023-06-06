import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState: { name: "hailey", age: 1 },
  reducers: {
    changeName(state) {
      state.name = "ham" // name의 hailey를 ham으로 변경 
    },
    changeAge(state, actions) {
      state.age += actions.payload //입력받은 값으로 버튼 누를때마다 age 증가
    }
  }
})

export let { changeName, changeAge } = user.actions //위에서 만든 변경함수 export
export { user } //store.js에서 import하기 위해서

