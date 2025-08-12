import { decrease, increase } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <span className="text-6xl">{value}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(increase())}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Arttır
        </button>
        <button
          onClick={() => dispatch(decrease())}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Azalt
        </button>
      </div>
    </div>
  );
};

export default App;
