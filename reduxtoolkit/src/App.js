import { useSelector, useDispatch } from "react-redux";
import { changeAge, changeName } from "./store";

function App() {

  //등록된 state 다 가져옴
  // const state = useSelector((state) => { return state });

  // 등록된 state 중에서 user 가져옴
  const state = useSelector((state) => { return state.user });
  const dispatch = useDispatch();

  return (
    <div>
      {/* 버튼을 누르면 hailey에서 ham으로 변경되는 것을 확인할 수 있음 */}
      <h1>{state.name}</h1>
      <button onClick={() => { dispatch(changeName()) }}>Name Change</button>

      {/* 버튼을 누르면 age가 10씩 증가하는 것을 확인가능*/}
      <h1>{state.age}</h1>
      <button onClick={() => { dispatch(changeAge(10)) }}>Age Change</button>
    </div>
  );
}
export default App;
