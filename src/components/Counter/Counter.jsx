import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/features/counter/counterSlice.js';

const  Counter  = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Incrementar
        </button>
        <br />


        <span>{count}</span>


    <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
        
          Decremento
        </button>
        <br />
      </div>
    </div>
  );
}

export default Counter;