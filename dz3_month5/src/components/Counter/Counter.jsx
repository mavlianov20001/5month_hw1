import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../../store/actions";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const increase = () => {
    dispatch(increaseCount());
  };
  const decrease = () => {
    dispatch(decreaseCount());
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={decrease} className={styles.minus}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increase} className={styles.plus}>
        +
      </button>
    </div>
  );
};

export default Counter;
