import { configureStore } from '@reduxjs/toolkit'
import { user } from './store/userSlice'


export default configureStore({
  reducer: {
    user: user.reducer //user createSlice state를 등록(useSelector에서 이곳에 등록되어 있는 state들을 받아옴)
  }
})