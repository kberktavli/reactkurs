import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementByValue = (value: number) => {
    dispatch(incrementByAmount(value));
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 px-4 py-2 text-white rounded"
        onClick={handleIncrement}
      >
        Artir
      </button>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded"
        onClick={handleDecrement}
      >
        Azalt
      </button>
      <button
        className="bg-green-500 px-4 py-2 text-white rounded"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        className="bg-gray-500 px-4 py-2 text-white rounded"
        onClick={() => handleIncrementByValue(5)} // parametre atatıgımız için arrow function kullandık.
      >
        5'er artır.
      </button>
      <button
        className="bg-pink-500 px-4 py-2 text-white rounded"
        onClick={() => handleIncrementByValue(15)}
      >
        15'er artır.
      </button>

      <br />
      <h1 className="text-3xl">{value}</h1>
    </div>
  );
};
export default App;
