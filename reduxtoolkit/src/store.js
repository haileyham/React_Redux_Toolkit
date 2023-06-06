import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: { name: "hailey", age: 1 },
  reducers: {
    changeName(state) {
      state.name = "ham" // name의 hailey를 ham으로 변경 
    }
  }
})

export let { changeName } = user.actions //위에서 만든 변경함수 export

export default configureStore({
  reducer: {
    user: user.reducer //user createSlice state를 등록(useSelector에서 이곳에 등록되어 있는 state들을 받아옴)
  }
})